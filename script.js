const elements = document.querySelectorAll(".fade-in");
const serieBars = document.querySelectorAll(".serie-progress");

function showOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  elements.forEach(el => {
    if (el.getBoundingClientRect().top < triggerBottom) {
      el.classList.add("visible");
    }
  });

  serieBars.forEach(bar => {
    if (bar.getBoundingClientRect().top < triggerBottom) {
      if (bar.classList.contains("arcane")) bar.style.width = "95%";
      if (bar.classList.contains("tlou")) bar.style.width = "85%";
      if (bar.classList.contains("st")) bar.style.width = "80%";
    }
  });
}

window.addEventListener("scroll", showOnScroll);