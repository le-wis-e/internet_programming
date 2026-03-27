// Toggle Mobile Menu
function toggleMenu() {
  const nav = document.getElementById('main-nav');
  nav.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', () => {
  // 1. Scroll Reveal Logic
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // 2. FAQ Accordion Logic
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      item.classList.toggle('open');
    });
  });
});

// 3. Contact Form Submission
function handleSubmit(e) {
  e.preventDefault();
  
  // Mapping to your HTML IDs (fname, email, message)
  const firstName = document.getElementById('fname')?.value;
  const email = document.getElementById('email')?.value;
  const message = document.getElementById('message')?.value;

  if (firstName && email && message) {
    const successMsg = document.getElementById('success-msg');
    if (successMsg) successMsg.classList.add('show');
    e.target.reset();
  } else {
    alert("Please fill in all required fields.");
  }
}

// 4. Newsletter Logic
function handleNewsletter(e) {
  e.preventDefault();
  alert("🌿 Thanks for joining the JoyGrow community!");
  e.target.reset();
}