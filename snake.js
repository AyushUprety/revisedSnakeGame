const centerX1 = 50;
const centerY1 = 50;
const centerX2 = 200;
const centerY2 = 300;
const radius = 3;
const startAngle = 0;
const endAngle = 2 * Math.PI;

const Canvas = document.getElementById("Canvas");
const canva = Canvas.getContext("2d"); // getContext simply provides interface to interact with Canva

const startGame = function () {
  drawSnake();
  drawFood();
  setInterval(startGame, 1000 / 7); // I want to rerender the screen 7 times a second.
};

const drawSnake = function () {
  // This function will create the shape of the snake. Here we have made head of snake circular
  canva.fillStyle = "green";
  canva.beginPath();
  canva.arc(centerX1, centerY1, radius, startAngle, endAngle);
  canva.stroke();
  canva.fill();
};
const drawFood = function () {
  // This function will create the shape of the food. Here we have made shape of food circular
  canva.fillStyle = "red";
  canva.beginPath();
  canva.arc(centerX2, centerY2, radius, startAngle, endAngle);
  canva.stroke();
  canva.fill();
};
const moveSnake = function () {};

startGame();
