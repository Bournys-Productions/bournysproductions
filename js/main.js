// Loader
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

// Sidebar toggle
const burger = document.getElementById("burger");
const sidebar = document.getElementById("sidebar");

burger.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});