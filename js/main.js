/**
 * High Tech Industries - Main Application JavaScript
 * Vanilla JavaScript implementation for Corporate Industrial UX
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileMenu();
  initScrollAnimations();
  initEnquiryForms();
  initModalHandlers();
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
  const toggleBtn = document.getElementById('mobileNavToggle') || document.getElementById('menuToggle');
  const navMenu = document.getElementById('mobileFullMenu') || document.getElementById('navMenu');

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

/* 3. INTERSECTION OBSERVER SUBTLE REVEAL ANIMATIONS */
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

/* 4. ENQUIRY & QUOTATION FORM HANDLING */
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

        // Show success alert message in form container
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
            border-radius: 4px;
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

/* 5. GLOBAL MODAL HANDLERS FOR PRODUCT DETAILS */
function initModalHandlers() {
  const modal = document.getElementById('productDetailModal');
  if (!modal) return;

  // Close modal on overlay background click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeProductModal();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeProductModal();
    }
  });
}

window.closeProductModal = function () {
  const modal = document.getElementById('productDetailModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
};

window.openProductModal = function (productId) {
  if (typeof PRODUCTS_DATA === 'undefined') return;
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('productDetailModal');
  if (!modal) return;

  const titleEl = document.getElementById('modalProdTitle');
  const catEl = document.getElementById('modalProdCat');
  const imgEl = document.getElementById('modalProdImg');
  const descEl = document.getElementById('modalProdDesc');
  const specsTableEl = document.getElementById('modalProdSpecs');

  if (titleEl) titleEl.textContent = product.name;
  if (catEl) catEl.textContent = product.category;
  if (imgEl) {
    imgEl.src = product.image;
    imgEl.alt = product.name;
  }
  if (descEl) descEl.textContent = product.description;

  if (specsTableEl && product.specs) {
    specsTableEl.innerHTML = product.specs.map(s => `
      <tr style="border-bottom: 1px solid #E2E8F0;">
        <th style="padding: 0.6rem 0; font-size: 0.8rem; font-weight: 700; color: #62676C; text-align: left; text-transform: uppercase;">${s.label}</th>
        <td style="padding: 0.6rem 0; font-size: 0.95rem; font-weight: 700; color: #25282B; text-align: right;">${s.val}</td>
      </tr>
    `).join('');
  }

  // Pre-fill enquiry product select if user clicks Request Quote in modal
  const cProductSelect = document.getElementById('cProduct');
  if (cProductSelect) {
    cProductSelect.value = product.name;
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};
