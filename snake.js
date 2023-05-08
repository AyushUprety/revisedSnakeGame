let centerX1 = 50;
let centerY1 = 50;
let centerX2 = 200;
let centerY2 = 300;
const radius = 3;
const startAngle = 0;
const endAngle = 2 * Math.PI;
let xSpeed = 0;
let ySpeed = 0;
let xDirection = 0;
let yDirection = 0;

const Canvas = document.getElementById("Canvas");
const canva = Canvas.getContext("2d"); // getContext simply provides interface to interact with Canva

const startGame = function () {
  drawSnake();
  drawFood();
  moveSnake();
  setInterval(startGame, 1000 / 7); // I want to rerender the screen 7 times a second.
};

const drawSnake = function () {
  // This function will create the shape of the snake. Here we have made head of snake circular
  canva.clearRect(0, 0, Canvas.width, Canvas.height);
  canva.beginPath();
  canva.fillStyle = "green";
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

const moveSnake = function (event) {
  // move the snake in response to various key pressed
  console.log(event);
  if (event?.keyCode == 38) {
    // up arrow
    if (yDirection == 1) return;
    yDirection = -1;
    centerY1 -= 1;
    xDirection = 0;
  }
  if (event?.keyCode == 40) {
    //down arrow
    if (yDirection == -1) return;
    yDirection = 1;
    centerY1 += 1;
    xDirection = 0;
  }
  if (event?.keyCode == 37) {
    //left arrow
    if (xDirection == 1) return;
    xDirection = -1;
    centerX1 -= 1;
    yDirection = 0;
  }
  if (event?.keyCode == 39) {
    //right arrow
    if (xDirection == -1) return;
    xDirection = 1;
    centerX1 += 1;
    yDirection = 0;
  }
};
document.addEventListener("keydown", moveSnake);

const changePositions = function () {};

startGame();
