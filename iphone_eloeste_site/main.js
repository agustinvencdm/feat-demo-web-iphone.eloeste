/* ============================================
   iPhone el Oeste — main.js
   Desarrollado por VitaDev
   ============================================ */

// ---- NAV: ocultar/mostrar al hacer scroll ----
const nav = document.querySelector('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  if (currentScroll > 80) {
    nav.style.background = 'rgba(10, 10, 10, 0.97)';
  } else {
    nav.style.background = 'rgba(10, 10, 10, 0.85)';
  }

  lastScroll = currentScroll;
});

// ---- ANIMACIÓN: aparición al hacer scroll (Intersection Observer) ----
const fadeTargets = document.querySelectorAll(
  '.product-card, .service-card, .testimonial, .plan-card, .stat'
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

fadeTargets.forEach((el) => {
  el.classList.add('fade-init');
  observer.observe(el);
});

// ---- SMOOTH SCROLL para links internos ----
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ---- PRODUCT CARDS: click abre WhatsApp con el nombre del producto ----
const WHATSAPP_NUMBER = '5491100000000'; // ← Cambiar por el número real

document.querySelectorAll('.product-card').forEach((card) => {
  card.addEventListener('click', () => {
    const name = card.querySelector('.product-name')?.textContent || 'un producto';
    const price = card.querySelector('.product-price')?.textContent?.trim() || '';
    const msg = encodeURIComponent(
      `Hola! Vi en la web que tienen el ${name} (${price}) y quiero más info 🙌`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  });
});

// Estilos de animación inyectados por JS (sin tocar el CSS externo)
const style = document.createElement('style');
style.textContent = `
  .fade-init {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  .fade-init.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);
