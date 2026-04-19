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
// Vanilla scroll listener (instead of GSAP ScrollTrigger) because it's more deterministic
// across layout shifts (hero video loading, font swapping, etc.) and never gets stuck on
// stale cached positions. Reads the section's bounding rect every scroll tick and maps
// linear scroll progress to one of N steps.
(function initProcessReveal() {
  const section = document.getElementById('ultraaloe');
  const nav = document.getElementById('nav');
  if (!section) return;
  const steps = Array.from(section.querySelectorAll('.process__step'));
  if (!steps.length) return;

  const isDesktop = () => window.matchMedia('(min-width: 961px)').matches;

  const setActive = (idx) => {
    steps.forEach((el, i) => el.classList.toggle('is-active', i === idx));
  };
  setActive(0); // default to the first step

  // On mobile (<960px) the section un-pins and stacks — no scroll math needed, all steps are always visible via the mobile CSS override.
  if (!isDesktop()) return;

  let ticking = false;
  const update = () => {
    const rect = section.getBoundingClientRect();
    const vh = window.innerHeight;
    const totalDist = Math.max(1, section.offsetHeight - vh);
    const travelled = Math.max(0, Math.min(totalDist, -rect.top));
    const progress = totalDist === 0 ? 0 : travelled / totalDist;
    const idx = Math.min(steps.length - 1, Math.floor(progress * steps.length));
    setActive(idx);

    // Hide the nav while the section is actively pinned — gives the step content
    // ~90px of extra viewport so the full composition fits on laptops.
    if (nav) {
      const pinned = rect.top <= 1 && rect.bottom > vh;
      nav.classList.toggle('is-hidden', pinned);
    }
  };
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { update(); ticking = false; });
  };
  update();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
})();
