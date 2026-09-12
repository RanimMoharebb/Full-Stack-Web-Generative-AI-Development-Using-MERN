/* =============================================
   SCRIPT.JS – Shawarma Palace, Alexandria
============================================= */

// ─── DATA ────────────────────────────────────
const menuData = {
  wraps: [
    {
      name: "Classic Chicken Shawarma",
      desc: "Tender marinated chicken, garlic sauce, pickles, tomatoes & fresh parsley in warm Arabic bread.",
      price: 65,
      badge: "Best Seller",
      img: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600&q=80",
    },
    {
      name: "Meat Shawarma",
      desc: "Slow-roasted lamb & beef blend with tahini, onions, sumac and our secret spice rub.",
      price: 75,
      badge: "Chef's Pick",
      img: "https://images.unsplash.com/photo-1561651823-34feb02250e4?w=600&q=80",
    },
    {
      name: "Mixed Shawarma",
      desc: "The best of both worlds — chicken and meat together with double garlic sauce.",
      price: 85,
      badge: "Popular",
      img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&q=80",
    },
    {
      name: "Veggie Shawarma",
      desc: "Grilled halloumi, roasted peppers, hummus, fresh herbs and tahini in a toasted wrap.",
      price: 55,
      badge: "Vegetarian",
      img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80",
    },
    {
      name: "Spicy Shawarma",
      desc: "Fiery marinated chicken with jalapeños, harissa sauce, and crispy onions. Not for the faint-hearted!",
      price: 70,
      badge: "🔥 Hot",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
    },
    {
      name: "Double Meat Wrap",
      desc: "Extra-loaded with double the slow-roasted meat, extra tahini, and a side of pickled turnips.",
      price: 95,
      badge: "XL",
      img: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600&q=80",
    },
  ],
  plates: [
    {
      name: "Shawarma Plate",
      desc: "Generous portion of shawarma meat served over rice with salad, garlic sauce and pita bread.",
      price: 110,
      badge: "Full Meal",
      img: "https://images.unsplash.com/photo-1561651823-34feb02250e4?w=600&q=80",
    },
    {
      name: "Family Platter",
      desc: "Feeds 4–6 people. Mixed chicken & meat shawarma with rice, salads, sauces and fresh bread.",
      price: 320,
      badge: "Family",
      img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&q=80",
    },
    {
      name: "Shawarma Bowl",
      desc: "Low-carb option: shawarma over fresh greens, cherry tomatoes, cucumber and tahini dressing.",
      price: 90,
      badge: "Healthy",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
    },
  ],
  sides: [
    {
      name: "Garlic Fries",
      desc: "Crispy golden fries tossed in our legendary garlic sauce and fresh parsley.",
      price: 35,
      badge: "Fan Fave",
      img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80",
    },
    {
      name: "Hummus & Pita",
      desc: "Creamy homemade hummus drizzled with olive oil and paprika, served with warm pita.",
      price: 30,
      badge: "Classic",
      img: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600&q=80",
    },
    {
      name: "Fresh Lemonade",
      desc: "Alexandria-style lemonade with mint, a pinch of salt and crushed ice. Refreshing!",
      price: 25,
      badge: "Refreshing",
      img: "https://images.unsplash.com/photo-1561651823-34feb02250e4?w=600&q=80",
    },
  ],
};

const testimonials = [
  {
    stars: 5,
    text: "Wallahi, this is the best shawarma I've ever had in my life! The garlic sauce alone is worth the trip from Cairo. I come to Alexandria just for this place.",
    name: "Ahmed Mostafa",
    location: "Cairo, Egypt",
    emoji: "👨",
  },
  {
    stars: 5,
    text: "Growing up in Alexandria, Shawarma Palace was always our Friday night tradition. 30 years later and the taste is still exactly the same — pure perfection.",
    name: "Nadia El-Sayed",
    location: "Alexandria, Egypt",
    emoji: "👩",
  },
  {
    stars: 5,
    text: "I visited Alexandria for a conference and a colleague insisted I try this place. I ended up going three times in four days. The mixed shawarma is unreal!",
    name: "Omar Khalil",
    location: "Dubai, UAE",
    emoji: "👨‍💼",
  },
  {
    stars: 5,
    text: "The atmosphere, the smell, the taste — everything about Shawarma Palace is magical. It feels like eating at a friend's home. Highly recommend the family platter!",
    name: "Fatima Hassan",
    location: "Alexandria, Egypt",
    emoji: "👩‍🦱",
  },
  {
    stars: 5,
    text: "As a food blogger, I've tried shawarma across the Middle East. Shawarma Palace in Alexandria is genuinely top-tier. The spice blend is extraordinary.",
    name: "Karim Adel",
    location: "Food Blogger, Egypt",
    emoji: "👨‍🍳",
  },
];

// ─── NAVBAR ──────────────────────────────────
const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 60);
  document
    .getElementById("backToTop")
    .classList.toggle("visible", window.scrollY > 400);
  updateActiveNav();
});

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");
  });
});

function updateActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const scrollY = window.scrollY + 100;
  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");
    const link = document.querySelector(`.nav-link[href="#${id}"]`);
    if (link)
      link.classList.toggle("active", scrollY >= top && scrollY < top + height);
  });
}

// ─── HERO PARALLAX & ZOOM ────────────────────
const heroBg = document.querySelector(".hero-bg");
setTimeout(() => heroBg && heroBg.classList.add("zoomed"), 100);

window.addEventListener("scroll", () => {
  if (heroBg)
    heroBg.style.transform = `scale(1) translateY(${window.scrollY * 0.25}px)`;
});

// ─── PARTICLES ───────────────────────────────
function createParticles() {
  const container = document.getElementById("particles");
  if (!container) return;
  for (let i = 0; i < 18; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    const size = Math.random() * 6 + 3;
    p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${Math.random() * 100}%;
      animation-duration: ${Math.random() * 12 + 8}s;
      animation-delay: ${Math.random() * 8}s;
      opacity: ${Math.random() * 0.5 + 0.2};
    `;
    container.appendChild(p);
  }
}
createParticles();

// ─── COUNTER ANIMATION ───────────────────────
function animateCounters() {
  document.querySelectorAll(".stat-num").forEach((el) => {
    const target = parseInt(el.dataset.target);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(current).toLocaleString();
    }, 16);
  });
}

// Trigger counters when hero is visible
const heroObserver = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      animateCounters();
      heroObserver.disconnect();
    }
  },
  { threshold: 0.3 },
);
const heroSection = document.querySelector(".hero");
if (heroSection) heroObserver.observe(heroSection);

// ─── MENU ────────────────────────────────────
let activeTab = "wraps";

function renderMenu(tab) {
  const grid = document.getElementById("menuGrid");
  const items = menuData[tab];
  grid.innerHTML = "";
  items.forEach((item, i) => {
    const card = document.createElement("div");
    card.className = "menu-card";
    card.style.animationDelay = `${i * 0.08}s`;
    card.innerHTML = `
      <div class="menu-card-img">
        <img src="${item.img}" alt="${item.name}" loading="lazy" />
        <span class="menu-card-badge">${item.badge}</span>
      </div>
      <div class="menu-card-body">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <div class="menu-card-footer">
          <div class="menu-price">${item.price} <span>EGP</span></div>
          <button class="add-btn" onclick="addToCart('${item.name}', ${item.price})" aria-label="Add ${item.name} to cart">+</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".tab-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    activeTab = btn.dataset.tab;
    renderMenu(activeTab);
  });
});

renderMenu("wraps");

// ─── CART TOAST ──────────────────────────────
let toastTimeout;
function addToCart(name, price) {
  let toast = document.getElementById("cartToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "cartToast";
    toast.style.cssText = `
      position: fixed; bottom: 90px; right: 32px;
      background: linear-gradient(135deg, #D4A017, #C0392B);
      color: #fff; padding: 14px 22px; border-radius: 50px;
      font-size: 0.9rem; font-weight: 600;
      box-shadow: 0 8px 32px rgba(212,160,23,0.4);
      z-index: 9999; transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
      transform: translateY(20px); opacity: 0;
      font-family: 'Inter', sans-serif;
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = `🛒 Added: ${name} — ${price} EGP`;
  toast.style.transform = "translateY(0)";
  toast.style.opacity = "1";
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.style.transform = "translateY(20px)";
    toast.style.opacity = "0";
  }, 2800);
}

// ─── TESTIMONIALS SLIDER ─────────────────────
let currentSlide = 0;
let autoSlideTimer;

function renderTestimonials() {
  const track = document.getElementById("testimonialsTrack");
  const dots = document.getElementById("testimonialsDots");
  track.innerHTML = "";
  dots.innerHTML = "";

  testimonials.forEach((t, i) => {
    const card = document.createElement("div");
    card.className = `testimonial-card${i === 0 ? " active" : ""}`;
    card.innerHTML = `
      <div class="testimonial-stars">${"★".repeat(t.stars)}</div>
      <p class="testimonial-text">"${t.text}"</p>
      <div class="testimonial-author">
        <div class="author-avatar">${t.emoji}</div>
        <div>
          <div class="author-name">${t.name}</div>
          <div class="author-location">${t.location}</div>
        </div>
      </div>
    `;
    track.appendChild(card);

    const dot = document.createElement("div");
    dot.className = `dot${i === 0 ? " active" : ""}`;
    dot.addEventListener("click", () => goToSlide(i));
    dots.appendChild(dot);
  });
}

function goToSlide(index) {
  const cards = document.querySelectorAll(".testimonial-card");
  const dots = document.querySelectorAll(".dot");
  cards.forEach((c) => c.classList.remove("active"));
  dots.forEach((d) => d.classList.remove("active"));
  currentSlide = (index + testimonials.length) % testimonials.length;
  cards[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active");

  const track = document.getElementById("testimonialsTrack");
  const cardWidth = cards[0].offsetWidth + 24;
  const offset = Math.max(32, (window.innerWidth - 1280) / 2 + 32);
  track.style.transform = `translateX(${offset - currentSlide * cardWidth}px)`;
}

function startAutoSlide() {
  autoSlideTimer = setInterval(() => goToSlide(currentSlide + 1), 4500);
}

renderTestimonials();
setTimeout(() => {
  goToSlide(0);
  startAutoSlide();
}, 300);

document
  .getElementById("testimonialsTrack")
  .addEventListener("mouseenter", () => clearInterval(autoSlideTimer));
document
  .getElementById("testimonialsTrack")
  .addEventListener("mouseleave", startAutoSlide);

// ─── SCROLL REVEAL ───────────────────────────
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
);

function addRevealClass() {
  const targets = [
    ".feature-item",
    ".menu-card",
    ".about-content",
    ".about-image-wrap",
    ".gallery-item",
    ".order-card",
    ".contact-info",
    ".map-placeholder",
    ".footer-brand",
    ".footer-links",
    ".footer-newsletter",
  ];
  targets.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.classList.add("reveal");
      el.style.transitionDelay = `${i * 0.08}s`;
      revealObserver.observe(el);
    });
  });
}
addRevealClass();

// ─── BACK TO TOP ─────────────────────────────
document.getElementById("backToTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ─── NEWSLETTER FORM ─────────────────────────
document.getElementById("newsletterForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const input = e.target.querySelector("input");
  const btn = e.target.querySelector("button");
  btn.textContent = "✓ Subscribed!";
  btn.style.background = "linear-gradient(135deg, #27ae60, #2ecc71)";
  input.value = "";
  setTimeout(() => {
    btn.textContent = "Subscribe";
    btn.style.background = "";
  }, 3000);
});

// ─── SMOOTH ANCHOR SCROLL ────────────────────
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// ─── GALLERY LIGHTBOX ────────────────────────
document.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener("click", () => {
    const img = item.querySelector("img");
    const src = img.src;
    const alt = img.alt;

    const overlay = document.createElement("div");
    overlay.style.cssText = `
      position: fixed; inset: 0; z-index: 9999;
      background: rgba(0,0,0,0.92);
      display: flex; align-items: center; justify-content: center;
      cursor: zoom-out; animation: fadeIn 0.3s ease;
      padding: 32px;
    `;
    overlay.innerHTML = `
      <img src="${src}" alt="${alt}" style="
        max-width: 90vw; max-height: 85vh;
        object-fit: contain; border-radius: 12px;
        box-shadow: 0 32px 80px rgba(0,0,0,0.8);
        animation: fadeInUp 0.4s ease;
      " />
      <button style="
        position: absolute; top: 24px; right: 32px;
        background: rgba(255,255,255,0.1); border: none;
        color: #fff; font-size: 2rem; cursor: pointer;
        width: 48px; height: 48px; border-radius: 50%;
        display: flex; align-items: center; justify-content: center;
        transition: background 0.2s;
      " aria-label="Close">&times;</button>
    `;
    document.body.appendChild(overlay);
    document.body.style.overflow = "hidden";

    const close = () => {
      document.body.removeChild(overlay);
      document.body.style.overflow = "";
    };
    overlay.addEventListener("click", close);
    overlay.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation();
      close();
    });
    document.addEventListener(
      "keydown",
      (e) => {
        if (e.key === "Escape") close();
      },
      { once: true },
    );
  });
});

console.log(
  "%c🌯 Shawarma Palace – Alexandria, Egypt",
  "color: #D4A017; font-size: 18px; font-weight: bold;",
);
console.log(
  "%cBuilt with ❤️ on the Mediterranean Coast",
  "color: #9A8F7A; font-size: 12px;",
);
