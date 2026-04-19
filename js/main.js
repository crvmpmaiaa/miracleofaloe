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
