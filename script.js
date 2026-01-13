// MUSIC
document.body.addEventListener("click", () => {
  const music = document.getElementById("bgMusic");
  music.play();
});

// FIREWORKS
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function fire() {
  ctx.fillStyle = `hsl(${Math.random()*360},100%,50%)`;
  ctx.beginPath();
  ctx.arc(
    Math.random() * canvas.width,
    Math.random() * canvas.height,
    4,
    0,
    Math.PI * 2
  );
  ctx.fill();
}

setInterval(fire, 50);
