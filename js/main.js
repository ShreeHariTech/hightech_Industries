/**
 * High Tech Industries - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileMenu();
  initScrollAnimations();
  initEnquiryForms();
  initHeroParallax();
});

/* 1. STICKY HEADER WITH HEIGHT REDUCTION & SHADOW ON SCROLL */
function initStickyHeader() {
  const header = document.getElementById('siteHeader');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* 2. MOBILE MENU OVERLAY & TOGGLE */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('mobileFullMenu');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });

  // Close menu when clicking links
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggleBtn.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  });

  // Close menu on clicking outside
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
      toggleBtn.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  });
}

/* 3. INTERSECTION OBSERVER REVEAL ANIMATIONS */
function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.reveal-fade-up, .reveal-clip-up, .reveal-fade-left, .reveal-fade-right');
  if (!revealElements.length) return;

  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-visible'));
  }
}

/* 4. ENQUIRY FORM HANDLING */
function initEnquiryForms() {
  const forms = document.querySelectorAll('#rfqForm, #contactForm, .enquiry-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'SEND ENQUIRY →';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'PROCESSING ENQUIRY...';
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = 'ENQUIRY SENT SUCCESSFULLY ✓';
          submitBtn.style.backgroundColor = '#16a34a';
          submitBtn.style.borderColor = '#16a34a';
        }

        let successBox = form.querySelector('.form-success-message');
        if (!successBox) {
          successBox = document.createElement('div');
          successBox.className = 'form-success-message';
          successBox.style.cssText = `
            margin-top: 1rem;
            padding: 1rem;
            background: #f0fdf4;
            border: 1px solid #bbf7d0;
            color: #166534;
            font-size: 0.9rem;
            font-weight: 600;
            border-radius: 2px;
            text-align: center;
          `;
          form.appendChild(successBox);
        }
        successBox.innerHTML = 'Thank you for your enquiry. Our engineering team in Ahmedabad will contact you shortly.';

        form.reset();

        setTimeout(() => {
          if (submitBtn) {
            submitBtn.innerHTML = originalText;
            submitBtn.style.backgroundColor = '';
            submitBtn.style.borderColor = '';
          }
        }, 5000);
      }, 800);
    });
  });
}

/* 5. HERO MICRO-PARALLAX ON MOUSE MOVEMENT */
function initHeroParallax() {
  const heroSection = document.getElementById('hero');
  const machineWrap = document.getElementById('heroMachineWrap');
  const cadLayer = document.getElementById('heroCadLayer');

  if (!heroSection || !machineWrap) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  let requestID = null;

  heroSection.addEventListener('mousemove', (e) => {
    if (window.innerWidth < 1024) return;

    const rect = heroSection.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    if (requestID) cancelAnimationFrame(requestID);

    requestID = requestAnimationFrame(() => {
      const machineX = (x / rect.width) * 12;
      const machineY = (y / rect.height) * 10;
      machineWrap.style.transform = `translate(${machineX.toFixed(2)}px, ${machineY.toFixed(2)}px)`;

      if (cadLayer) {
        const cadX = (-x / rect.width) * 5;
        const cadY = (-y / rect.height) * 4;
        cadLayer.style.transform = `translate(${cadX.toFixed(2)}px, ${cadY.toFixed(2)}px)`;
      }
    });
  });

  heroSection.addEventListener('mouseleave', () => {
    machineWrap.style.transform = 'translate(0px, 0px)';
    if (cadLayer) cadLayer.style.transform = 'translate(0px, 0px)';
  });
}
