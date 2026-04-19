// ===== Navbar — toggles .is-scrolled after the first scroll =====
(function initNavScroll() {
  const nav = document.getElementById('nav');
  if (!nav) return;
  const onScroll = () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();

// ===== Cart count scaffold (updated by future Add to Bag clicks) =====
window.MOA = window.MOA || {};
window.MOA.cart = { count: 0 };
window.MOA.setCartCount = (n) => {
  window.MOA.cart.count = n;
  document.querySelectorAll('.nav__cart-count').forEach(el => { el.textContent = n; });
  document.querySelectorAll('.nav__cart').forEach(el => { el.setAttribute('aria-label', `Cart, ${n} items`); });
};

// ===== Drawer (cart) =====
(function initDrawer() {
  const drawer = document.getElementById('cartDrawer');
  if (!drawer) return;
  const open = () => {
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };
  const close = () => {
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };
  document.querySelectorAll('#cartBtn').forEach(btn => btn.addEventListener('click', open));
  drawer.querySelectorAll('[data-drawer-close]').forEach(el => el.addEventListener('click', close));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && drawer.getAttribute('aria-hidden') === 'false') close(); });
  window.MOA.openCart = open;
  window.MOA.closeCart = close;
})();

// ===== Email popup =====
(function initPopup() {
  const popup = document.getElementById('emailPopup');
  if (!popup) return;
  const open = () => popup.setAttribute('aria-hidden', 'false');
  const close = () => popup.setAttribute('aria-hidden', 'true');
  popup.querySelectorAll('[data-popup-close]').forEach(el => el.addEventListener('click', close));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && popup.getAttribute('aria-hidden') === 'false') close(); });

  // Show once per session after 8s (respect reduced-motion: still show, no animation handled in CSS)
  const KEY = 'moa_popup_shown';
  if (!sessionStorage.getItem(KEY)) {
    setTimeout(() => { open(); sessionStorage.setItem(KEY, '1'); }, 8000);
  }

  const form = popup.querySelector('[data-popup-submit]');
  form.addEventListener('submit', e => {
    e.preventDefault();
    form.innerHTML = '<p style="font-family: var(--font-serif); font-size: 22px; text-align: center; padding: 16px;">Thank you — your code is on its way.</p>';
    setTimeout(close, 2400);
  });

  window.MOA.openPopup = open;
  window.MOA.closePopup = close;
})();

// ===== Inline email capture (§12 on homepage) =====
(function initInlineEmail() {
  const form = document.getElementById('emailCaptureForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const input = form.querySelector('input[type="email"]');
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Sent — check your inbox ✓';
    input.disabled = true;
  });
})();
