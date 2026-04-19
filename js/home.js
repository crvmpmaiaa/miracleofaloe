// ===== Moment 1 — hero video: autoplay once, pause on end, replay on re-entry after scroll-exit =====
(function initHeroVideo() {
  const hero = document.getElementById('hero');
  const video = document.getElementById('heroVideo');
  if (!hero || !video) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Reveal text overlay + scrim at the V2 white-flash timing (2.4s into playback).
  // The text only appears against the aloe end scene — never over the white opening.
  const REVEAL_MS = 2400;
  let revealTimer = null;

  const reveal = () => hero.classList.add('is-revealed');
  const unreveal = () => hero.classList.remove('is-revealed');

  const scheduleReveal = () => {
    clearTimeout(revealTimer);
    revealTimer = setTimeout(reveal, REVEAL_MS);
  };

  const playFromStart = () => {
    try { video.currentTime = 0; } catch (_) {}
    unreveal();
    const playPromise = video.play();
    if (playPromise && typeof playPromise.then === 'function') {
      playPromise.then(scheduleReveal).catch(() => {
        // Autoplay blocked (rare with muted+playsinline). Show the last frame + reveal text.
        try { video.currentTime = video.duration || 0; } catch (_) {}
        reveal();
      });
    } else {
      scheduleReveal();
    }
  };

  // Pause on end — do NOT loop. Last frame stays on screen.
  video.addEventListener('ended', () => {
    video.pause();
    // Ensure the reveal state is on even if the user's browser ate the timer.
    reveal();
  });

  // Reduced motion: skip playback entirely, show a static still + text immediately.
  // CSS handles the fallback image on `.hero.is-reduced`.
  if (reducedMotion) {
    hero.classList.add('is-reduced', 'is-revealed');
    video.removeAttribute('autoplay');
    video.pause();
    return;
  }

  // Kick off initial playback once the video has decodable data.
  const kickOff = () => playFromStart();
  if (video.readyState >= 2) {
    kickOff();
  } else {
    video.addEventListener('loadeddata', kickOff, { once: true });
  }

  // Replay on re-entry after scroll-exit.
  // Rule: once the hero leaves viewport (past threshold 0.5), the next re-entry resets
  // playback from frame 0. If user stays on the hero or barely scrolls, no reset.
  let hasExitedSinceLastPlay = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        hasExitedSinceLastPlay = true;
      } else if (hasExitedSinceLastPlay) {
        hasExitedSinceLastPlay = false;
        playFromStart();
      }
    });
  }, { threshold: 0.5 });
  observer.observe(hero);
})();

// ===== Moment 2 — UltraAloe brand story staged reveal =====
(function initProcessReveal() {
  const section = document.getElementById('ultraaloe');
  if (!section) return;
  const steps = section.querySelectorAll('.process__step');
  if (!steps.length) return;

  const isDesktop = () => window.matchMedia('(min-width: 961px)').matches;

  const setActive = (idx) => {
    steps.forEach((el, i) => el.classList.toggle('is-active', i === idx));
  };

  setActive(0); // default

  const initScroll = () => {
    if (!window.gsap || !window.ScrollTrigger) { requestAnimationFrame(initScroll); return; }
    gsap.registerPlugin(ScrollTrigger);
    if (!isDesktop()) return;

    ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.2,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const idx = Math.min(steps.length - 1, Math.floor(self.progress * steps.length));
        setActive(idx);
      }
    });

    // Refresh after initial layout settles (hero video load + first paint can shift things).
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', () => setTimeout(refresh, 120));
    const heroVideo = document.getElementById('heroVideo');
    if (heroVideo) heroVideo.addEventListener('loadedmetadata', () => setTimeout(refresh, 80));
  };
  initScroll();
})();
