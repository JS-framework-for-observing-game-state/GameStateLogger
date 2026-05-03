import { GameStateLogger } from './gamestatelogger/lib/gamestatelogger.js';

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

let gamestatelogger = new GameStateLogger(10);

// the canvas width & height, snake x & y, and the apple x & y, all need to be a multiples of the grid size in order for collision detection to work
// (e.g. 16 * 25 = 400)
var grid = 16;
var count = 0;
var timeStep = 0;
var snake = {
  x: 160,
  y: 160,

  // snake velocity. moves one grid length every frame in either the x or y direction
  dx: grid,
  dy: 0,

  // keep track of all grids the snake body occupies
  cells: [],

  // length of the snake. grows when eating an apple
  maxCells: 4
};
var apple = {
  x: 320,
  y: 320
};

// get random whole numbers in a specific range
// @see https://stackoverflow.com/a/1527820/2124254
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// game loop
function loop() {
  requestAnimationFrame(loop); //basically et main loop call som sørger for konstant at kalde main loop

  // slow game loop to 15 fps instead of 60 (60/15 = 4)
  if (++count < 16) {
    timeStep++;
    return;
  }

  count = 0;
  context.clearRect(0,0,canvas.width,canvas.height);

  console.log("Before moving snake at time: " + timeStep);
  // move snake by it's velocity
  snake.x += snake.dx;
  snake.y += snake.dy;
  console.log("After moving snake at time: " + timeStep);
  // wrap snake position horizontally on edge of screen
  if (snake.x < 0) {
    snake.x = canvas.width - grid;
  }
  else if (snake.x >= canvas.width) {
    snake.x = 0;
  }

  // wrap snake position vertically on edge of screen
  if (snake.y < 0) {
    snake.y = canvas.height - grid;
  }
  else if (snake.y >= canvas.height) {
    snake.y = 0;
  }

  // keep track of where snake has been. front of the array is always the head
  snake.cells.unshift({x: snake.x, y: snake.y});

  // remove cells as we move away from them
  if (snake.cells.length > snake.maxCells) {
    snake.cells.pop();
/*      gamestatelogger.logLocation(undefined, `Position of Snake's head at timeStep ${timeStep} after moving`,
        {"x": (snake.cells[0].x), "y": (snake.cells[0].y)}, timeStep);
      console.log(`Time: ${timeStep}, Snake's position after moving: x: ${snake.cells[0].x}, y: ${snake.cells[0].y}.`);*/
  }



  // draw apple
  context.fillStyle = 'red';
  context.fillRect(apple.x, apple.y, grid-1, grid-1);

  // draw snake one cell at a time
  context.fillStyle = 'green';
  snake.cells.forEach(function(cell, index) {

    // drawing 1 px smaller than the grid creates a grid effect in the snake body so you can see how long it is
    context.fillRect(cell.x, cell.y, grid-1, grid-1);

    // snake ate apple
    if (cell.x === apple.x && cell.y === apple.y) {
      snake.maxCells++;
      gamestatelogger.logNewLevel("Ate apple!", timeStep, snake.maxCells);

      // canvas is 400x400 which is 25x25 grids
      apple.x = getRandomInt(0, 25) * grid;
      gamestatelogger.logRandomSeed("Random seed: Apple x", apple.x, timeStep);
      apple.y = getRandomInt(0, 25) * grid;
      gamestatelogger.logRandomSeed("Random seed: Apple y", apple.y, timeStep);
    }

    // check collision with all cells after this one (modified bubble sort)
    for (var i = index + 1; i < snake.cells.length; i++) {

      // snake occupies same space as a body part. reset game
      if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
        gamestatelogger.logGameResult("Game over!", timeStep, snake.maxCells);
        snake.x = 160;
        snake.y = 160;
        snake.cells = [];
        snake.maxCells = 4;
        snake.dx = grid;
        snake.dy = 0;

        apple.x = 320;
        apple.y = 320;
        count = 0;
        timeStep = 0;
        gamestatelogger.ID = (Date.now().toString(36) + Math.random().toString(36));
      }
    }
  });
  timeStep++;
}

// listen to keyboard events to move the snake
document.addEventListener('keydown', function(e) {
    /*gamestatelogger.logLocation(undefined, `Position of Snake's head at timeStep ${timeStep} before moving`,
      {"x": (snake.cells[0].x), "y": (snake.cells[0].y)}, timeStep);
    console.log(`Time: ${timeStep}, Snake's position before moving: x: ${snake.cells[0].x}, y: ${snake.cells[0].y}.`);*/
  // prevent snake from backtracking on itself by checking that it's
  // not already moving on the same axis (pressing left while moving
  // left won't do anything, and pressing right while moving left
  // shouldn't let you collide with your own body)

  // left arrow key
  if (e.which === 37 && snake.dx === 0) {
    snake.dx = -grid;
    snake.dy = 0;
    gamestatelogger.logKeyDownEvent(37, timeStep, snake.maxCells);
  }
  // up arrow key
  else if (e.which === 38 && snake.dy === 0) {
    snake.dy = -grid;
    snake.dx = 0;
    gamestatelogger.logKeyDownEvent(38, timeStep, snake.maxCells);
  }
  // right arrow key
  else if (e.which === 39 && snake.dx === 0) {
    snake.dx = grid;
    snake.dy = 0;
    gamestatelogger.logKeyDownEvent(39, timeStep, snake.maxCells);
  }
  // down arrow key
  else if (e.which === 40 && snake.dy === 0) {
    snake.dy = grid;
    snake.dx = 0;
    gamestatelogger.logKeyDownEvent(40, timeStep, snake.maxCells);
  }
  timeStep++;
});

// start the game
requestAnimationFrame(loop);