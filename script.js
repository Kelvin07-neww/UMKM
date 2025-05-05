// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

menuToggle.addEventListener('keypress', (e) => {
  if(e.key === 'Enter' || e.key === ' ') {
    navLinks.classList.toggle('active');
  }
});

// Simple contact form validation and feedback
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Simple validation
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    formMessage.textContent = 'Semua kolom harus diisi.';
    formMessage.style.color = '#cc0000';
    return;
  }

  // Basic email format check
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/i;
  if(!emailPattern.test(email)) {
    formMessage.textContent = 'Format email tidak valid.';
    formMessage.style.color = '#cc0000';
    return;
  }

  // If everything is valid
  formMessage.style.color = '#007700';
  formMessage.textContent = 'Pesan berhasil dikirim! Terima kasih telah menghubungi kami.';

  // Reset the form
  form.reset();
});
