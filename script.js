/* ============================================================
   Baker's Heart By Vinay — script.js
   ============================================================ */

'use strict';

/* ──────────────────────────────────────────────
   MENU DATA
   ────────────────────────────────────────────── */
const WHATSAPP_NUMBER = '919999999999'; // Replace with real number

const menuData = {
  pizza: [
    { name: 'Margherita Pizza', price: 149, desc: 'Classic tomato sauce, fresh mozzarella & basil', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=75', badge: 'Bestseller' },
    { name: 'Veggie Delight Pizza', price: 169, desc: 'Loaded with seasonal veggies & herbed sauce', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=75', badge: 'Veg' },
    { name: 'Paneer Tikka Pizza', price: 189, desc: 'Spicy marinated paneer on creamy white sauce', img: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=400&q=75', badge: 'Spicy' },
    { name: 'BBQ Corn Pizza', price: 179, desc: 'Smoky BBQ base with sweet corn & cheese', img: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&q=75', badge: 'Chef\'s Pick' },
  ],
  burger: [
    { name: 'Classic Veg Burger', price: 79, desc: 'Crispy aloo tikki, fresh veggies & tangy sauce', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=75', badge: 'Veg' },
    { name: 'Cheese Burst Burger', price: 99, desc: 'Juicy patty with oozing molten cheese filling', img: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&q=75', badge: 'Bestseller' },
    { name: 'Crispy Chicken Burger', price: 119, desc: 'Golden crispy chicken with mayo & lettuce', img: 'https://images.unsplash.com/photo-1550317138-10000687a72b?w=400&q=75', badge: 'Non-Veg' },
    { name: 'Double Decker Burger', price: 139, desc: 'Double patty stacked high with all the toppings', img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&q=75', badge: 'XL' },
  ],
  sandwich: [
    { name: 'Grilled Veg Sandwich', price: 69, desc: 'Multi-grain bread with grilled veggies & spread', img: 'https://images.unsplash.com/photo-1560781290-7dc94c0f8f4f?w=400&q=75', badge: 'Healthy' },
    { name: 'Paneer Sandwich', price: 89, desc: 'Soft paneer slices with mint chutney', img: 'https://images.unsplash.com/photo-1528736235302-52922df5c122?w=400&q=75', badge: 'Veg' },
    { name: 'Club Sandwich', price: 109, desc: 'Triple-layered club with egg, chicken & cheese', img: 'https://images.unsplash.com/photo-1619096252214-ef06c45683e3?w=400&q=75', badge: 'Filling' },
    { name: 'Cheese Toast Sandwich', price: 79, desc: 'Toasted bread with melted cheese & herbs', img: 'https://images.unsplash.com/photo-1481070414801-51fd732d7184?w=400&q=75', badge: 'Quick Bite' },
  ],
  shakes: [
    { name: 'Mango Shake', price: 89, desc: 'Thick & creamy mango shake made from real pulp', img: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=400&q=75', badge: 'Seasonal' },
    { name: 'Chocolate Shake', price: 99, desc: 'Rich dark chocolate milkshake with cream', img: 'https://images.unsplash.com/photo-1572490122747-3e9197aa0a75?w=400&q=75', badge: 'Bestseller' },
    { name: 'Strawberry Shake', price: 89, desc: 'Fresh strawberry blended with chilled milk', img: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&q=75', badge: 'Fresh' },
    { name: 'Oreo Shake', price: 109, desc: 'Crushed Oreo cookies blended in creamy shake', img: 'https://images.unsplash.com/photo-1534790566855-4cb788d389ec?w=400&q=75', badge: 'Favorite' },
  ],
  coffee: [
    { name: 'Cold Coffee', price: 79, desc: 'Smooth, chilled coffee with whipped cream', img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=75', badge: 'Refreshing' },
    { name: 'Cappuccino', price: 89, desc: 'Frothy espresso with steamed milk foam', img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=75', badge: 'Classic' },
    { name: 'Café Mocha', price: 99, desc: 'Espresso with rich chocolate & milk', img: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=400&q=75', badge: 'Rich' },
    { name: 'Iced Latte', price: 99, desc: 'Cool espresso poured over silky cold milk', img: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400&q=75', badge: 'Trending' },
  ],
  icecream: [
    { name: 'Chocolate Sundae', price: 79, desc: 'Scoops of chocolate ice cream with hot fudge', img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=75', badge: 'Indulgent' },
    { name: 'Mango Softy', price: 59, desc: 'Creamy mango soft serve in a waffle cone', img: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=400&q=75', badge: 'Fresh' },
    { name: 'Ice Cream Waffle', price: 99, desc: 'Warm crispy waffle topped with two scoops', img: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?w=400&q=75', badge: 'Bestseller' },
    { name: 'Oreo Blast Shake', price: 119, desc: 'Ice cream blended with Oreo & toppings', img: 'https://images.unsplash.com/photo-1500490459234-b28f14cf7bde?w=400&q=75', badge: 'Treat' },
  ],
  momos: [
    { name: 'Steamed Veg Momos', price: 69, desc: 'Soft steamed dumplings stuffed with veggies', img: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&q=75', badge: 'Veg' },
    { name: 'Fried Momos', price: 79, desc: 'Crispy pan-fried dumplings with dip', img: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&q=75', badge: 'Crispy' },
    { name: 'Tandoori Momos', price: 89, desc: 'Chargrilled momos with spicy tandoori coating', img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&q=75', badge: 'Spicy' },
    { name: 'Paneer Momos', price: 89, desc: 'Creamy paneer-stuffed steamed dumplings', img: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&q=75', badge: 'Premium' },
  ],
  fries: [
    { name: 'Classic Salted Fries', price: 49, desc: 'Crispy golden fries lightly salted to perfection', img: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=400&q=75', badge: 'Classic' },
    { name: 'Peri-Peri Fries', price: 59, desc: 'Loaded with spicy peri-peri seasoning', img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=75', badge: 'Spicy' },
    { name: 'Cheese Fries', price: 79, desc: 'Crispy fries drenched in melted cheese sauce', img: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&q=75', badge: 'Bestseller' },
    { name: 'Loaded Fries', price: 99, desc: 'Topped with salsa, jalapeños, sour cream & cheese', img: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=75', badge: 'Premium' },
  ],
};

/* ──────────────────────────────────────────────
   RENDER MENU CARDS
   ────────────────────────────────────────────── */
function buildMenuCard(item) {
  const waText = encodeURIComponent(`Hi! I want to order ${item.name} — ₹${item.price}`);
  const waUrl  = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`;

  return `
    <div class="menu-card reveal">
      <div class="menu-card-img">
        <img src="${item.img}" alt="${item.name}" loading="lazy" />
        ${item.badge ? `<span class="menu-card-badge">${item.badge}</span>` : ''}
      </div>
      <div class="menu-card-body">
        <h3 class="menu-card-name">${item.name}</h3>
        <p class="menu-card-desc">${item.desc}</p>
        <div class="menu-card-footer">
          <div class="menu-card-price">₹${item.price} <span>onwards</span></div>
          <a href="${waUrl}" target="_blank" class="btn-order">
            <i class="fab fa-whatsapp"></i> Order
          </a>
        </div>
      </div>
    </div>
  `;
}

function renderMenu(category) {
  const grid = document.getElementById('menuGrid');
  const items = menuData[category] || [];
  grid.innerHTML = items.map(buildMenuCard).join('');
  // Trigger reveal for newly added cards
  requestAnimationFrame(() => {
    grid.querySelectorAll('.reveal').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 80);
    });
  });
}

/* ──────────────────────────────────────────────
   TAB SWITCHING
   ────────────────────────────────────────────── */
function initMenuTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  let activeCategory = 'pizza';

  renderMenu(activeCategory);

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const cat = tab.dataset.category;
      if (cat === activeCategory) return;

      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeCategory = cat;

      const grid = document.getElementById('menuGrid');
      grid.style.opacity = '0';
      grid.style.transform = 'translateY(12px)';

      setTimeout(() => {
        renderMenu(cat);
        grid.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
        grid.style.opacity = '1';
        grid.style.transform = 'translateY(0)';
      }, 180);
    });
  });
}

/* ──────────────────────────────────────────────
   STICKY NAVBAR
   ────────────────────────────────────────────── */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const threshold = 60;

  const onScroll = () => {
    if (window.scrollY > threshold) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // Run once on load
}

/* ──────────────────────────────────────────────
   MOBILE NAV TOGGLE
   ────────────────────────────────────────────── */
function initMobileNav() {
  const toggle  = document.getElementById('navToggle');
  const links   = document.getElementById('navLinks');
  const navLinks = document.querySelectorAll('.nav-link');

  const closeNav = () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on nav link click
  navLinks.forEach(link => link.addEventListener('click', closeNav));

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!links.contains(e.target) && !toggle.contains(e.target)) {
      closeNav();
    }
  });
}

/* ──────────────────────────────────────────────
   ACTIVE NAV LINK ON SCROLL (Intersection Observer)
   ────────────────────────────────────────────── */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${entry.target.id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { threshold: 0.35 });

  sections.forEach(section => observer.observe(section));
}

/* ──────────────────────────────────────────────
   SCROLL REVEAL (Intersection Observer)
   ────────────────────────────────────────────── */
function initScrollReveal() {
  const revealEls = document.querySelectorAll(
    '.about-image-wrap, .about-content, .gallery-item, .loc-item, .contact-card, .location-info, .map-embed'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal', 'visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${(i % 4) * 0.1}s`;
    observer.observe(el);
  });
}

/* ──────────────────────────────────────────────
   STICKY WHATSAPP BUTTON — show after scroll
   ────────────────────────────────────────────── */
function initStickyWhatsApp() {
  const btn = document.getElementById('whatsappSticky');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.style.opacity = '1';
      btn.style.transform = 'scale(1)';
    } else {
      btn.style.opacity = '0';
      btn.style.transform = 'scale(0.8)';
    }
  }, { passive: true });

  // Start hidden
  btn.style.opacity = '0';
  btn.style.transform = 'scale(0.8)';
  btn.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
}

/* ──────────────────────────────────────────────
   SMOOTH SCROLL for anchor links
   ────────────────────────────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = document.getElementById('navbar').offsetHeight + 10;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ──────────────────────────────────────────────
   HERO PARALLAX (subtle)
   ────────────────────────────────────────────── */
function initHeroParallax() {
  const hero = document.querySelector('.hero');
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled < window.innerHeight) {
      hero.style.backgroundPositionY = `calc(50% + ${scrolled * 0.3}px)`;
    }
  }, { passive: true });
}

/* ──────────────────────────────────────────────
   INIT
   ────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileNav();
  initActiveNav();
  initMenuTabs();
  initScrollReveal();
  initStickyWhatsApp();
  initSmoothScroll();
  initHeroParallax();

  console.log('🧁 Baker\'s Heart By Vinay — Website Loaded!');
});
