// ===== FAQ Accordion =====
const faqItems = document.querySelectorAll(".faq-question");

faqItems.forEach(btn => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.classList.toggle("active");
    btn.classList.toggle("open");
    const symbol = btn.querySelector("span");
    symbol.textContent = btn.classList.contains("open") ? "−" : "+";
  });
});

// ===== Smooth Scroll for Header & Footer Links =====
const navLinks = document.querySelectorAll('header nav ul li a, .footer ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetID = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetID);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// // ===== Header shrink =====
// const header = document.querySelector('.main-header');
// window.addEventListener('scroll', () => {
//   if (window.scrollY > 50) header.classList.add("shrink");
//   else header.classList.remove("shrink");
// });

// // ===== Mobile menu toggle =====
// const menuBtn = document.querySelector('.menu-toggle');
// const navbar = document.querySelector('.navbar');
// if (menuBtn && navbar) menuBtn.addEventListener('click', () => navbar.classList.toggle('active'));


// ===== Hero Button Scroll to About =====
const heroBtn = document.querySelector('.hero-text .btn');
const aboutSection = document.querySelector('.about');
if(heroBtn && aboutSection){
  heroBtn.addEventListener('click', () => {
    window.scrollTo({
      top: aboutSection.offsetTop - 60,
      behavior: 'smooth'
    });
  });
}

// ===== Hover Animation for Causes of Constipation Section =====
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".item-welcome");
  items.forEach(item => {
    item.addEventListener("mouseenter", () => {
      item.classList.add("active");
    });
    item.addEventListener("mouseleave", () => {
      item.classList.remove("active");
    });
  });
});
// Profile menu toggle
const profileBtn = document.getElementById("profileBtn");
const profileMenu = document.getElementById("profileMenu");

if (profileBtn) {
  profileBtn.addEventListener("click", () => {
    profileMenu.classList.toggle("hidden");
  });
}

// Toggle mobile menu
const menuToggle = document.getElementById("menuToggle");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

// Shrink header on scroll
const header = document.getElementById("mainHeader");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});
