<<<<<<< HEAD
=======


>>>>>>> 9e9fb71939161a22faa31326b4dcf814dd33df28
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.innerHTML = '&#9776;';
    hamburger.setAttribute('aria-expanded', 'false');

    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('show');
      hamburger.setAttribute('aria-expanded', isOpen);
      hamburger.innerHTML = isOpen ? '&times;' : '&#9776;';
    });

    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        if (navLinks.classList.contains('show')) {
          navLinks.classList.remove('show');
          hamburger.innerHTML = '&#9776;';
          hamburger.setAttribute('aria-expanded', 'false');
        }
      });
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024) {
        navLinks.classList.remove('show');
        hamburger.innerHTML = '&#9776;';
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }
<<<<<<< HEAD
});
=======
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

>>>>>>> 9e9fb71939161a22faa31326b4dcf814dd33df28
