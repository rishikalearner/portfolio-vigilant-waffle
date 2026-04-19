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

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("mousemove", (e) => {
    let x = e.offsetX / card.clientWidth - 0.5;
    let y = e.offsetY / card.clientHeight - 0.5;

    card.style.transform = `
      rotateY(${x * 90}deg)
      rotateX(${y * -90}deg)
      scale(1.05)
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateY(0) rotateX(0)";
  });
});