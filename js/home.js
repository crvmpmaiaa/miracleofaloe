// ===== Moment 1 — canvas frame-scrub hero =====
(function initHeroScrub() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  // Config: frame count matches FFmpeg extraction (145 frames @ 24fps × 6s real hero.mp4).
  // NOTE: update this constant when swapping in any new hero.mp4 — match `ls assets/frames/ | wc -l`.
  const FRAME_COUNT = 145;
  const FRAME_PATH = (i) => `assets/frames/frame_${String(i).padStart(4, '0')}.jpg`;

  const frames = new Array(FRAME_COUNT);
  let loaded = 0;
  let currentIdx = -1;

  const sizeCanvas = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const drawFrame = (idx) => {
    const img = frames[idx];
    if (!img || !img.complete) return;
    const cw = window.innerWidth;
    const ch = window.innerHeight;
    const ir = img.naturalWidth / img.naturalHeight;
    const cr = cw / ch;
    let dw, dh, dx, dy;
    if (cr > ir) { dw = cw; dh = cw / ir; dx = 0; dy = (ch - dh) / 2; }
    else        { dh = ch; dw = ch * ir; dy = 0; dx = (cw - dw) / 2; }
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, dx, dy, dw, dh);
  };

  const preload = () => new Promise(resolve => {
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = FRAME_PATH(i);
      img.onload = img.onerror = () => {
        loaded++;
        if (loaded === FRAME_COUNT) resolve();
      };
      frames[i - 1] = img;
    }
  });

  const start = async () => {
    sizeCanvas();
    await preload();
    drawFrame(0);

    const initScroll = () => {
      if (!window.gsap || !window.ScrollTrigger) { requestAnimationFrame(initScroll); return; }
      gsap.registerPlugin(ScrollTrigger);

      const progress = { v: 0 };
      const render = () => {
        const idx = Math.min(FRAME_COUNT - 1, Math.max(0, Math.round(progress.v * (FRAME_COUNT - 1))));
        if (idx !== currentIdx) { currentIdx = idx; drawFrame(idx); }
      };

      ScrollTrigger.create({
        trigger: '.hero',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.4,
        onUpdate: (self) => { progress.v = self.progress; render(); }
      });

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        progress.v = 1; render();
      }
    };
    initScroll();

    window.addEventListener('resize', () => { sizeCanvas(); drawFrame(currentIdx); }, { passive: true });
  };

  if (document.readyState === 'complete') start();
  else window.addEventListener('load', start);
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
      onUpdate: (self) => {
        const idx = Math.min(steps.length - 1, Math.floor(self.progress * steps.length));
        setActive(idx);
      }
    });
  };
  initScroll();
})();
