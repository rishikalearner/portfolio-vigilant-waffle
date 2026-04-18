// ACTIVE LINK ON SCROLL
const pages = document.querySelectorAll(".page");
const navLinks = document.querySelectorAll(".nav-center a");

window.addEventListener("scroll", () => {
  let current = "";

  pages.forEach((page) => {
    const pageTop = page.offsetTop - 120;
    if (scrollY >= pageTop) {
      current = page.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});


// MOBILE MENU TOGGLE
const menuToggle = document.getElementById("menuToggle");
const navCenter = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navCenter.classList.toggle("show");
});


// CLOSE MENU AFTER CLICK (mobile)
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navCenter.classList.remove("show");
  });
});