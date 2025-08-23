// Interactivity for Anuranan Website
// Load common header section from header.html
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');
  if (header) {
    fetch('assets/header.html')
      .then(response => response.text())
      .then(html => {
        header.innerHTML = html;
      });
  }

    // Highlight active nav link
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPage = window.location.pathname.split('/').pop();
    navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPage || (link.getAttribute('href') === 'index.html' && currentPage === '')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
      link.addEventListener('click', function() {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
      });
    });

    // Hamburger menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinksContainer = document.getElementById('nav-links');
    if (menuToggle && navLinksContainer) {
      menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navLinksContainer.classList.toggle('active');
      });
      // Optional: Hide menu after clicking a link (for mobile UX)
      navLinksContainer.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
          menuToggle.classList.remove('active');
          navLinksContainer.classList.remove('active');
        });
      });
    }
});
// Banner slider for event images (on index.html)
const bannerImages = [
  "images/events/WhatsApp Image 2025-08-23 at 10.46.21.jpeg",
  "images/events/WhatsApp Image 2025-08-23 at 10.46.50.jpeg",
  "images/events/WhatsApp Image 2025-08-23 at 10.48.18.jpeg",
  "images/events/WhatsApp Image 2025-08-23 at 10.54.59 (1).jpeg",
  "images/events/WhatsApp Image 2025-08-23 at 10.54.59 (2).jpeg",
  "images/events/WhatsApp Image 2025-08-23 at 10.54.59 (3).jpeg",
  "images/events/WhatsApp Image 2025-08-23 at 10.55.00 (1).jpeg",
  "images/events/WhatsApp Image 2025-08-23 at 10.55.00 (2).jpeg",
  "images/events/WhatsApp Image 2025-08-23 at 10.55.00.jpeg",
  "images/events/WhatsApp Image 2025-08-23 at 10.55.01 (2).jpeg",
  "images/events/WhatsApp Image 2025-08-23 at 10.55.01 (3).jpeg",
  "images/events/WhatsApp Image 2025-08-23 at 10.55.01.jpeg",
  "images/events/WhatsApp Image 2025-08-23 at 10.55.02 (1).jpeg",
  "images/events/WhatsApp Image 2025-08-23 at 10.55.02 (3).jpeg",
  "images/events/WhatsApp Image 2025-08-23 at 10.55.02.jpeg",
  "images/events/WhatsApp Image 2025-08-23 at 10.55.03 (1).jpeg",
  "images/events/WhatsApp Image 2025-08-23 at 10.55.03 (2).jpeg",
  "images/events/WhatsApp Image 2025-08-23 at 10.55.03.jpeg",
  "images/events/WhatsApp Image 2025-08-23 at 10.55.04 (2).jpeg",
  "images/events/WhatsApp Image 2025-08-23 at 10.55.05 (3).jpeg",
  "images/events/WhatsApp Image 2025-08-23 at 10.55.05.jpeg",
  "images/events/WhatsApp Image 2025-08-23 at 10.55.06 (1).jpeg",
  "images/events/WhatsApp Image 2025-08-23 at 10.55.06 (2).jpeg",
  "images/events/WhatsApp Image 2025-08-23 at 10.55.06.jpeg",
  "images/events/WhatsApp Image 2025-08-23 at 10.55.07 (1).jpeg",
  "images/events/WhatsApp Image 2025-08-23 at 10.55.07 (2).jpeg",
  "images/events/WhatsApp Image 2025-08-23 at 10.55.07.jpeg",
  "images/events/WhatsApp Image 2025-08-23 at 10.55.08 (1).jpeg",
  "images/events/WhatsApp Image 2025-08-23 at 10.55.08 (2).jpeg",
  "images/events/WhatsApp Image 2025-08-23 at 10.55.08.jpeg",
  "images/events/WhatsApp Image 2025-08-23 at 10.55.09 (1).jpeg",
  "images/events/WhatsApp Image 2025-08-23 at 10.55.09 (2).jpeg",
  "images/events/WhatsApp Image 2025-08-23 at 10.55.09.jpeg"
];
const bannerImg = document.querySelector('.banner-image');
if (bannerImg) {
  let idx = 0;
  // Use slower speed for non-home pages
  let interval = window.location.pathname.endsWith('index.html') ? 4000 : 6000;
  setInterval(() => {
    idx = (idx + 1) % bannerImages.length;
    bannerImg.style.opacity = 0.3;
    setTimeout(() => {
      bannerImg.src = bannerImages[idx];
      bannerImg.style.opacity = 1;
    }, 400);
  }, interval);
}

// Smooth scroll for anchor links
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = link.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Modal popup for contact form (on contact.html)
function showModal(message) {
  let modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `<div class="modal-content"><span class="close">&times;</span><p>${message}</p></div>`;
  document.body.appendChild(modal);
  modal.querySelector('.close').onclick = () => modal.remove();
  modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
}
if (document.querySelector('form')) {
  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    showModal('Thank you for contacting us! We will get back to you soon.');
    this.reset();
  });
}

// Scroll-to-top button
const scrollBtn = document.createElement('button');
scrollBtn.innerText = '↑';
scrollBtn.className = 'scroll-top';
document.body.appendChild(scrollBtn);
scrollBtn.style.display = 'none';
window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

// Card hover effect (add class for animation)
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', () => card.classList.add('hovered'));
  card.addEventListener('mouseleave', () => card.classList.remove('hovered'));
});

// Simple image slider for events/news (if images with class 'slider' exist)
const sliders = document.querySelectorAll('.slider');
sliders.forEach(slider => {
  let images = slider.querySelectorAll('img');
  let idx = 0;
  setInterval(() => {
    images.forEach((img, i) => img.style.display = i === idx ? 'block' : 'none');
    idx = (idx + 1) % images.length;
  }, 2500);
});
