/* ═══════════════════════════════════════════════════════════
   WANDERLUST — script.js
   Handles: Destinations · Background FX · Theme · Form · Scroll
   ═══════════════════════════════════════════════════════════ */

'use strict';

/* ── 1. DESTINATION DATA ────────────────────────────────── */
const DESTINATIONS = [
  // ── DOMESTIC ──────────────────────────────────────────
  {
    id: 1,
    name: 'Rajasthan',
    country: 'India — Domestic',
    type: 'domestic',
    desc: 'Land of maharajas and golden forts. From Jaipur\'s pink palaces to Jaisalmer\'s desert sands, a journey through royal splendour.',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80',
    bg: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1920&q=85',
    alt: 'Jaipur palace, Rajasthan',
  },
  {
    id: 2,
    name: 'Kerala',
    country: 'India — Domestic',
    type: 'domestic',
    desc: 'God\'s Own Country — emerald backwaters, tea-carpeted hill stations, and spice-scented forests await.',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80',
    bg: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1920&q=85',
    alt: 'Kerala backwaters',
  },
  {
    id: 3,
    name: 'Manali',
    country: 'India — Domestic',
    type: 'domestic',
    desc: 'Snow-capped Himalayas, roaring rivers, and crisp mountain air. A paradise for adventure seekers and nature lovers.',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
    bg: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&q=85',
    alt: 'Manali mountains',
  },
  {
    id: 4,
    name: 'Goa',
    country: 'India — Domestic',
    type: 'domestic',
    desc: 'Pristine beaches, vibrant nightlife, Portuguese-era architecture, and legendary sunsets on the Arabian Sea.',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80',
    bg: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1920&q=85',
    alt: 'Goa beach',
  },
  // ── INTERNATIONAL ──────────────────────────────────────
  {
    id: 5,
    name: 'Santorini',
    country: 'Greece',
    type: 'international',
    desc: 'Iconic whitewashed clifftop villages, volcanic sunsets, and the deepest blue waters of the Aegean Sea.',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80',
    bg: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1920&q=85',
    alt: 'Santorini Greece',
  },
  {
    id: 6,
    name: 'Bali',
    country: 'Indonesia',
    type: 'international',
    desc: 'Ancient temples, terraced rice paddies, sacred monkey forests, and world-class surf breaks in paradise.',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
    bg: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920&q=85',
    alt: 'Bali temple',
  },
  {
    id: 7,
    name: 'Paris',
    country: 'France',
    type: 'international',
    desc: 'The city of light — iconic cafés, art in every corner, the Eiffel Tower glittering at dusk, and haute cuisine.',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
    bg: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1920&q=85',
    alt: 'Paris Eiffel Tower',
  },
  {
    id: 8,
    name: 'Kyoto',
    country: 'Japan',
    type: 'international',
    desc: 'Ancient temples cloaked in cherry blossoms, geisha districts, Zen gardens, and centuries of samurai history.',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80',
    bg: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1920&q=85',
    alt: 'Kyoto Japan',
  },
  {
    id: 9,
    name: 'Machu Picchu',
    country: 'Peru',
    type: 'international',
    desc: 'The lost city of the Incas — an ancient citadel floating above clouds in the Andes, a wonder of the world.',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&q=80',
    bg: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=1920&q=85',
    alt: 'Machu Picchu Peru',
  },
  {
    id: 10,
    name: 'Maldives',
    country: 'Maldives',
    type: 'international',
    desc: 'Crystal turquoise lagoons, overwater bungalows, vibrant coral reefs, and powdery white sandbanks.',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80',
    bg: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1920&q=85',
    alt: 'Maldives overwater bungalow',
  },
  {
    id: 11,
    name: 'Iceland',
    country: 'Iceland',
    type: 'international',
    desc: 'Northern lights dancing over glaciers, geothermal hot springs, volcanic landscapes, and endless summer daylight.',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=800&q=80',
    bg: 'https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=1920&q=85',
    alt: 'Iceland Northern Lights',
  },
  {
    id: 12,
    name: 'Amalfi Coast',
    country: 'Italy',
    type: 'international',
    desc: 'Dramatic clifftop villages, lemon groves tumbling to cobalt seas, fresh seafood, and the scent of dolce vita.',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1534445967719-8ae7b972b1a5?w=800&q=80',
    bg: 'https://images.unsplash.com/photo-1534445967719-8ae7b972b1a5?w=1920&q=85',
    alt: 'Amalfi Coast Italy',
  },
];

/* ── 2. STATE ───────────────────────────────────────────── */
let activeFilter      = 'all';
let selectedDestId    = null;
let defaultHeroBg     = '';   // The hero section's natural background

/* ── 3. INIT ────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  loadTheme();
  renderDestinations(DESTINATIONS);
  initScrollObserver();
  initNavScroll();
  initBackToTop();
  initForm();
  initSmoothScroll();
});

/* ── 4. RENDER DESTINATIONS ─────────────────────────────── */
/**
 * Build and inject destination cards into the grid.
 * @param {Array} list - Array of destination objects to render
 */
function renderDestinations(list) {
  const grid = document.getElementById('destGrid');

  if (!list.length) {
    grid.innerHTML = `<div class="col-12 no-results-msg">
      <i class="bi bi-search" style="font-size:2rem;display:block;margin-bottom:1rem;opacity:0.4;"></i>
      No destinations found in this category.
    </div>`;
    return;
  }

  grid.innerHTML = list.map(d => `
    <div class="col-sm-6 col-lg-4 col-xl-3">
      <div class="dest-card ${selectedDestId === d.id ? 'selected' : ''}"
           id="card-${d.id}"
           onclick="selectDestination(${d.id})">
        <div class="dest-img-wrap">
          <img src="${d.image}" alt="${d.alt}" class="dest-img" loading="lazy" />
          <span class="dest-type ${d.type}">${d.type === 'domestic' ? 'Domestic' : 'International'}</span>
          <div class="dest-selected-check"><i class="bi bi-check-lg"></i></div>
        </div>
        <div class="dest-body">
          <p class="dest-country">${d.country}</p>
          <p class="dest-name">${d.name}</p>
          <p class="dest-desc">${d.desc}</p>
          <div class="dest-footer">
            <div class="rating-wrap">
              <span class="stars">${renderStars(d.rating)}</span>
              <span class="rating-num">${d.rating.toFixed(1)}</span>
            </div>
            <button class="btn-explore">Explore</button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

/**
 * Convert a numeric rating to a filled/half/empty star string.
 * @param {number} rating - e.g. 4.7
 * @returns {string} Unicode star characters
 */
function renderStars(rating) {
  const stars = [];
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.25 && rating % 1 < 0.75;
  const empty = 5 - full - (half ? 1 : 0);

  for (let i = 0; i < full;  i++) stars.push('★');
  if (half)                        stars.push('⯨');
  for (let i = 0; i < empty; i++) stars.push('☆');
  return stars.join('');
}

/* ── 5. FILTER ──────────────────────────────────────────── */
/**
 * Filter cards by type; update active chip styling.
 * @param {string} type - 'all' | 'domestic' | 'international'
 * @param {HTMLElement} el - The clicked chip
 */
function filterDest(type, el) {
  activeFilter = type;

  // Update chip styles
  document.querySelectorAll('.dest-filter').forEach(c => c.classList.remove('active'));
  el.classList.add('active');

  // Filter data and re-render
  const filtered = type === 'all'
    ? DESTINATIONS
    : DESTINATIONS.filter(d => d.type === type);

  renderDestinations(filtered);
}

/* ── 6. SELECT DESTINATION + BACKGROUND FX ──────────────── */
/**
 * Handle clicking a destination card — changes the page background.
 * @param {number} id - Destination ID
 */
function selectDestination(id) {
  const dest = DESTINATIONS.find(d => d.id === id);
  if (!dest) return;

  // Deselect if same card clicked again
  if (selectedDestId === id) {
    resetBackground();
    return;
  }

  selectedDestId = id;

  // Apply background image
  const bgEl      = document.getElementById('dynamicBg');
  const overlayEl = document.getElementById('bgOverlay');

  bgEl.style.backgroundImage = `url('${dest.bg}')`;
  bgEl.classList.add('active');
  overlayEl.classList.add('active');

  // Show selection banner
  document.getElementById('selectedBanner').style.display  = '';
  document.getElementById('selectedName').textContent       = dest.name;
  document.getElementById('selectedCountry').textContent    = `· ${dest.country}`;

  // Update card highlights (re-render visible cards)
  document.querySelectorAll('.dest-card').forEach(card => {
    const cardId = parseInt(card.id.replace('card-', ''));
    card.classList.toggle('selected', cardId === id);
  });

  // Smooth scroll up to see the full-page background effect
  document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
}

/**
 * Reset the dynamic background to the default state.
 */
function resetBackground() {
  selectedDestId = null;

  const bgEl      = document.getElementById('dynamicBg');
  const overlayEl = document.getElementById('bgOverlay');

  bgEl.classList.remove('active');
  overlayEl.classList.remove('active');

  // Fade out then remove image
  setTimeout(() => {
    bgEl.style.backgroundImage = '';
  }, 800);

  document.getElementById('selectedBanner').style.display = 'none';

  // Remove card highlights
  document.querySelectorAll('.dest-card').forEach(c => c.classList.remove('selected'));
}

/* ── 7. THEME ───────────────────────────────────────────── */
/**
 * Load saved theme from localStorage.
 */
function loadTheme() {
  const saved = localStorage.getItem('wl_theme') || 'dark';
  applyTheme(saved);
}

/**
 * Toggle between dark and light themes.
 */
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next    = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem('wl_theme', next);
}

/**
 * Apply a theme and update the toggle icons.
 * @param {string} theme - 'dark' | 'light'
 */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);

  const isDark    = theme === 'dark';
  const iconClass = isDark ? 'bi bi-sun-fill' : 'bi bi-moon-stars-fill';

  ['themeIconMobile', 'themeIconDesktop'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.className = iconClass;
  });
}

/* ── 8. FORM VALIDATION ─────────────────────────────────── */
/**
 * Bind submit handler and live validation to the contact form.
 */
function initForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (validateForm()) submitForm();
  });

  // Live validation: clear error when user starts typing
  ['fullName', 'emailAddr', 'phoneNum', 'message'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', () => clearFieldError(id));
  });
}

/**
 * Validate all required form fields.
 * @returns {boolean} - true if all valid
 */
function validateForm() {
  let valid = true;

  // Full Name
  const name = document.getElementById('fullName').value.trim();
  if (name.length < 2) {
    showFieldError('fullName', 'nameErr');
    valid = false;
  }

  // Email
  const email    = document.getElementById('emailAddr').value.trim();
  const emailRgx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRgx.test(email)) {
    showFieldError('emailAddr', 'emailErr');
    valid = false;
  }

  // Phone — allow 10-digit numbers, optional country code
  const phone    = document.getElementById('phoneNum').value.trim().replace(/[\s\-\+\(\)]/g, '');
  const phoneRgx = /^\d{10,13}$/;
  if (!phoneRgx.test(phone)) {
    showFieldError('phoneNum', 'phoneErr');
    valid = false;
  }

  // Message
  const msg = document.getElementById('message').value.trim();
  if (msg.length < 10) {
    showFieldError('message', 'msgErr');
    valid = false;
  }

  return valid;
}

/**
 * Mark a field as invalid and show its error message.
 * @param {string} fieldId
 * @param {string} errId
 */
function showFieldError(fieldId, errId) {
  document.getElementById(fieldId).classList.add('is-invalid');
  document.getElementById(errId).classList.add('show');
}

/**
 * Clear error state for a single field.
 * @param {string} fieldId
 */
function clearFieldError(fieldId) {
  document.getElementById(fieldId).classList.remove('is-invalid');
  const errMap = {
    fullName: 'nameErr',
    emailAddr: 'emailErr',
    phoneNum: 'phoneErr',
    message: 'msgErr',
  };
  const errId = errMap[fieldId];
  if (errId) document.getElementById(errId).classList.remove('show');
}

/**
 * Simulate a form submission with a brief loading state.
 */
function submitForm() {
  const btn     = document.getElementById('submitBtn');
  const text    = document.getElementById('submitText');
  const spinner = document.getElementById('submitSpinner');

  // Show spinner
  btn.disabled       = true;
  text.style.display = 'none';
  spinner.style.display = '';

  // Simulate async submit (e.g. API call)
  setTimeout(() => {
    btn.disabled       = false;
    spinner.style.display = 'none';
    text.style.display = '';

    // Show success
    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('formSuccess').style.display = '';

    // Reset form fields
    document.getElementById('contactForm').reset();

    // Re-show form after 6 seconds
    setTimeout(() => {
      document.getElementById('contactForm').style.display = '';
      document.getElementById('formSuccess').style.display = 'none';
    }, 6000);
  }, 1600);
}

/* ── 9. SCROLL REVEAL ───────────────────────────────────── */
/**
 * Use IntersectionObserver to trigger .reveal animations on scroll.
 */
function initScrollObserver() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ── 10. NAVBAR SCROLL ──────────────────────────────────── */
/**
 * Add scrolled class to navbar after 50px scroll.
 */
function initNavScroll() {
  const nav = document.getElementById('mainNav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });
}

/* ── 11. BACK TO TOP ────────────────────────────────────── */
/**
 * Show/hide the back-to-top button based on scroll position.
 */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
}

/**
 * Smoothly scroll back to the top of the page.
 */
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ── 12. SMOOTH SCROLL FOR NAV LINKS ─────────────────────── */
/**
 * Intercept nav link clicks and apply smooth scrolling with navbar offset.
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();

      const offset = document.getElementById('mainNav').offsetHeight + 8;
      const top    = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });

      // Close mobile nav if open
      const navCollapse = document.getElementById('navMenu');
      const bsCollapse  = bootstrap.Collapse.getInstance(navCollapse);
      if (bsCollapse) bsCollapse.hide();
    });
  });
}