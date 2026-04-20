// ACTIVE LINK ON SCROLL
const pages = document.querySelectorAll(".page");
const navLinks = document.querySelectorAll(".nav-center a");

window.addEventListener("scroll", () => {
  let current = "";
  pages.forEach((page) => {
    const pageTop = page.offsetTop - 120;
    if (scrollY >= pageTop) current = page.getAttribute("id");
  });
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) link.classList.add("active");
  });
});

// MOBILE MENU TOGGLE
const menuToggle = document.getElementById("menuToggle");
const navCenter  = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navCenter.classList.toggle("show");
  menuToggle.textContent = navCenter.classList.contains("show") ? "✕" : "☰";
});

// CLOSE MENU AFTER CLICKING A LINK
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navCenter.classList.remove("show");
    menuToggle.textContent = "☰";
  });
});

// PROJECT CARD 3D TILT (desktop / mouse only)
if (window.matchMedia("(hover: hover)").matches) {
  document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const x = (e.offsetX / card.clientWidth  - 0.5) * 18;
      const y = (e.offsetY / card.clientHeight - 0.5) * -18;
      card.style.transform = `rotateY(${x}deg) rotateX(${y}deg) scale(1.05)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}