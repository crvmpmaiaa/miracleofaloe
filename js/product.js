// ===== Gallery thumb switcher =====
(function initGallery() {
  const main = document.getElementById('galleryMain');
  const thumbs = document.querySelectorAll('.pdp-gallery__thumb');
  if (!main || !thumbs.length) return;
  thumbs.forEach(t => {
    t.addEventListener('click', () => {
      thumbs.forEach(x => x.classList.remove('is-active'));
      t.classList.add('is-active');
      main.style.opacity = '0';
      setTimeout(() => {
        main.src = t.dataset.src;
        main.style.opacity = '1';
      }, 120);
    });
  });
})();

// ===== Quantity stepper =====
(function initQty() {
  const input = document.getElementById('qtyInput');
  if (!input) return;
  document.querySelectorAll('[data-qty]').forEach(btn => {
    btn.addEventListener('click', () => {
      const dir = btn.dataset.qty === '+' ? 1 : -1;
      input.value = Math.max(1, Number(input.value || 1) + dir);
      updateAtcPrice();
    });
  });
  input.addEventListener('change', () => {
    input.value = Math.max(1, Number(input.value || 1));
    updateAtcPrice();
  });
})();

// ===== ATC price updater =====
function currentPrice() {
  const plan = document.querySelector('input[name="plan"]:checked');
  return plan && plan.value === 'sub' ? 31.44 : 36.99;
}
function updateAtcPrice() {
  const qty = Number(document.getElementById('qtyInput')?.value || 1);
  const total = (currentPrice() * qty).toFixed(2);
  const btn = document.getElementById('addToBag');
  if (btn) btn.textContent = `Add to bag · $${total}`;
}
document.querySelectorAll('input[name="plan"]').forEach(r => r.addEventListener('change', updateAtcPrice));

// ===== Add to bag (simulated) =====
(function initAtc() {
  const btn = document.getElementById('addToBag');
  const sticky = document.getElementById('stickyAtc');
  if (!btn) return;
  const add = () => {
    const qty = Number(document.getElementById('qtyInput')?.value || 1);
    if (window.MOA && window.MOA.setCartCount) {
      window.MOA.setCartCount((window.MOA.cart.count || 0) + qty);
      window.MOA.openCart && window.MOA.openCart();
    }
  };
  btn.addEventListener('click', add);
  if (sticky) sticky.addEventListener('click', add);
})();

// ===== Sticky mini-ATC visibility =====
(function initSticky() {
  const sticky = document.getElementById('pdpSticky');
  const hero = document.querySelector('.pdp-hero');
  if (!sticky || !hero) return;
  const update = () => {
    const heroBottom = hero.getBoundingClientRect().bottom;
    sticky.setAttribute('aria-hidden', heroBottom > 80 ? 'true' : 'false');
  };
  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update, { passive: true });
})();
