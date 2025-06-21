

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('form-feedback');
  // Ensure hamburger icon starts correctly
  if (hamburger) {
    hamburger.innerHTML = '&#9776;';
    hamburger.setAttribute('aria-expanded', 'false');
  }
  // Hamburger toggle logic
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('show');
      hamburger.setAttribute('aria-expanded', isOpen);
      hamburger.innerHTML = isOpen ? '&times;' : '&#9776;';
    });
  }
  // Reset hamburger and menu on window resize (for desktop view)
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
      if (navLinks) navLinks.classList.remove('show');
      if (hamburger) {
        hamburger.innerHTML = '&#9776;';
        hamburger.setAttribute('aria-expanded', 'false');
      }
    }
  });
  // Contact form submission feedback
  if (form && feedback) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      feedback.style.display = 'block';
      form.reset();
      setTimeout(() => {
        feedback.style.display = 'none';
      }, 3000);
    });
  }
});
=======

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.service-card');
  cards.forEach((card, idx) => {
    card.style.setProperty('--delay', `${idx * 0.2}s`);
  });
  cards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('active');
    });
  });
  function handleScroll() {
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        card.style.opacity = 1;
        card.style.transform = 'translateY(0)';
      }
    });
  }
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});




document.addEventListener("DOMContentLoaded", () => {
  const statNumbers = document.querySelectorAll('.stat-number');
  const speed = 40;
  statNumbers.forEach(stat => {
    const updateCount = () => {
      const target = +stat.getAttribute('data-target');
      const count = +stat.innerText.replace("+","");
      const inc = Math.max(1, Math.ceil(target / speed));
      if (count < target) {
        stat.innerText = count + inc;
        setTimeout(updateCount, 28);
      } else {
        stat.innerText = target + (stat.getAttribute('data-target').includes("+") ? "+" : "");
      }
    };
    updateCount();
  });
});

