// BURGER MENU
const burger = document.getElementById('burger');
const sidebar = document.getElementById('sidebar');
const links = document.querySelectorAll('.nav-link');
const indicator = document.getElementById('indicator');

burger.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

// Slider Indicator
links.forEach(link => {
  link.addEventListener('click', function () {
    indicator.style.top = this.offsetTop + "px";
  });
});