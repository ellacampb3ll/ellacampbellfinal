document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menuClose = document.getElementById("menu-close");
    const menuOverlay = document.getElementById("fullscreen-menu");
  
    menuToggle.addEventListener("click", () => {
      menuOverlay.classList.add("open");
    });
  
    menuClose.addEventListener("click", () => {
      menuOverlay.classList.remove("open");
    });
  });