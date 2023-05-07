const centerX = 50;
const centerY = 50;
const radius = 3;
const startAngle = 0;
const endAngle = 2 * Math.PI;

const Canvas = document.getElementById("Canvas");
const canva = Canvas.getContext("2d"); // getContext simply provides interface to interact with Canva

const startGame = function () {
  drawSnake();
  setInterval(startGame, 1000 / 7); // I want to rerender the screen 7 times a second.
};

const drawSnake = function () {
  canva.fillStyle = "green";
  canva.beginPath();
  canva.arc(centerX, centerY, radius, startAngle, endAngle);
  canva.stroke();
  canva.fill();
};
startGame();
