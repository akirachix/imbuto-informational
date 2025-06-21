
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
