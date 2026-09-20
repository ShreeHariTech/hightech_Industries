/**
 * High Tech Industries - Light Theme Interactions, Cursor & Parallax Module
 */

export function initInteractions() {
  initCustomCursor();
  initHeroParallax();
}

/* 1. Custom Desktop Follower Cursor */
function initCustomCursor() {
  const cursor = document.getElementById('customCursor');
  if (!cursor) return;

  if (window.matchMedia('(pointer: coarse)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    cursor.style.display = 'none';
    return;
  }

  let mouseX = -100;
  let mouseY = -100;
  let cursorX = -100;
  let cursorY = -100;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function renderCursor() {
    cursorX += (mouseX - cursorX) * 0.18;
    cursorY += (mouseY - cursorY) * 0.18;

    cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  // Hover states
  document.querySelectorAll('.stage-visual, .hero-product-frame, .product-image-box, .app-panel-card').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover-product'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover-product'));
  });

  document.querySelectorAll('.btn-primary-hero, .btn-outline-hero, .nav-cta-btn, .btn').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover-cta'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover-cta'));
  });
}

/* 2. Hero Mouse Movement Parallax Depth */
function initHeroParallax() {
  const stage = document.getElementById('heroProductStage');
  const frame = document.getElementById('heroProductFrame');
  if (!stage || !frame) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let requestTick = false;

  stage.addEventListener('mousemove', (e) => {
    if (requestTick) return;
    requestTick = true;

    requestAnimationFrame(() => {
      const rect = stage.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Subtle believable tilt (max 6 deg)
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;
      const translateX = ((x - centerX) / centerX) * 8;
      const translateY = ((y - centerY) / centerY) * 8;

      frame.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      requestTick = false;
    });
  });

  stage.addEventListener('mouseleave', () => {
    frame.style.transform = 'translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg)';
    frame.style.transition = 'transform 0.5s ease-out';
  });

  stage.addEventListener('mouseenter', () => {
    frame.style.transition = 'none';
  });
}
