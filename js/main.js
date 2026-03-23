const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");

function openSidebar() {
  sidebar.classList.add("open");
  sidebarOverlay.classList.add("show");
  menuToggle.classList.add("active");
}

function closeSidebar() {
  sidebar.classList.remove("open");
  sidebarOverlay.classList.remove("show");
  menuToggle.classList.remove("active");
}

menuToggle.addEventListener("click", () => {
  if (sidebar.classList.contains("open")) {
    closeSidebar();
  } else {
    openSidebar();
  }
});

sidebarOverlay.addEventListener("click", closeSidebar);

document.querySelectorAll(".sidebar a").forEach((link) => {
  link.addEventListener("click", closeSidebar);
});

/* Particle background */
const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");

let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createParticles() {
  particles = [];
  const count = Math.max(25, Math.floor(window.innerWidth / 35));

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 3 + 1.5,
      speedY: Math.random() * 0.45 + 0.15,
      speedX: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.6 + 0.2
    });
  }
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const particle of particles) {
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 40, 40, ${particle.alpha})`;
    ctx.shadowBlur = 10;
    ctx.shadowColor = "rgba(255, 0, 0, 0.75)";
    ctx.fill();

    particle.y += particle.speedY;
    particle.x += particle.speedX;

    if (particle.y > canvas.height + 10) {
      particle.y = -10;
      particle.x = Math.random() * canvas.width;
    }

    if (particle.x < -10) particle.x = canvas.width + 10;
    if (particle.x > canvas.width + 10) particle.x = -10;
  }

  requestAnimationFrame(drawParticles);
}

window.addEventListener("resize", () => {
  resizeCanvas();
  createParticles();
});

resizeCanvas();
createParticles();
drawParticles();
