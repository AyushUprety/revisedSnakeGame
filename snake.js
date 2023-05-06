const Canvas = document.getElementById("Canvas");
const canva = Canvas.getContext("2d"); // getContext simply provides interface to interact with Canva

const startGame = function () {
  setInterval(startGame, 1000 / 7); // I want to rerender the screen 7 times a second.
};
