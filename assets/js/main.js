document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const progress = document.getElementById('progress-bar');
  const revealEls = document.querySelectorAll('.reveal');

  // Scroll nav background
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');

    // Progress bar
    const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    progress.style.width = pct + '%';
  });

  // Initialize service card mouse tracking
  initializeServiceCards();

  // Mobile menu
  mobileBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.add('hidden')));

  // Smooth reveal animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealEls.forEach(el => observer.observe(el));

  // Smooth scroll anchors
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const targetId = a.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Contact form
  document.getElementById('contact-form').addEventListener('submit', e => {
    e.preventDefault();
    alert("Thank you! We'll contact you within 24 hours.");
    e.target.reset();
  });

  // Initialize Particles
  initializeParticles();
});

// Service Cards Mouse Tracking
function initializeServiceCards() {
  const serviceCards = document.querySelectorAll('.service-modern');

  serviceCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      card.style.setProperty('--mouse-x', `${x}%`);
      card.style.setProperty('--mouse-y', `${y}%`);
    });

    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--mouse-x', '50%');
      card.style.setProperty('--mouse-y', '50%');
    });
  });
}

// Particle System
function initializeParticles() {
  const createParticle = () => {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = window.innerHeight + 'px';
    particle.style.width = particle.style.height = Math.random() * 6 + 3 + 'px';
    particle.style.opacity = Math.random() * 0.5 + 0.3;
    document.body.appendChild(particle);

    // Animate upward
    let pos = window.innerHeight;
    const speed = Math.random() * 2 + 1;
    const drift = (Math.random() - 0.5) * 50; // Horizontal drift

    const animate = () => {
      pos -= speed;
      particle.style.top = pos + 'px';
      particle.style.left = parseFloat(particle.style.left) + drift * 0.01 + 'px';

      if (pos < -10) {
        particle.remove();
      } else {
        requestAnimationFrame(animate);
      }
    };
    animate();
  };

  // Create particles periodically
  setInterval(createParticle, 3000);

  // Create initial particles
  for (let i = 0; i < 5; i++) {
    setTimeout(createParticle, i * 600);
  }
}

// Helper Functions
function selectService(type) {
  const sel = document.querySelector('select[name="service"]');
  sel.value = type === 'agency' ? 'lead-generation' : 'customer-assistant';
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

function scrollToContact() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

function scrollToServices() {
  document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
}

function toggleFAQ(index) {
  const faqItems = document.querySelectorAll('.glass.rounded-2xl.overflow-hidden');
  const item = faqItems[index];
  const content = item.querySelector('.faq-content');
  const icon = item.querySelector('.faq-icon');

  content.classList.toggle('hidden');
  icon.classList.toggle('rotate-180');
}