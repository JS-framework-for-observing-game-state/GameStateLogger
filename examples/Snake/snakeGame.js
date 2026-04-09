class Snake {
    constructor() {
        this.frameCount = 0;
        this.canvasW = 400;
        this.canvasH = 400;
        this.grid = 16;
        this.count = 0;
        
        /*this.dx = 1;
        this.dy = 0;
        this.cells = [];
        this.maxCells = 4;
        this.x = 160;
        this.y = 160;*/
    }

    snake = {
        x: 160,
        y: 160,

        // snake velocity. moves one grid length every frame in either the x or y direction
        dx: this.grid,
        dy: 0,

        // keep track of all grids the snake body occupies
        cells: [],

        // length of the snake. grows when eating an apple
        maxCells: 4
    };


    apple = {x: 320, y: 320};

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    mainLoop(){
        console.log("in main loops")
        if (++this.count < 4) {
            return;
        }

        this.frameCount = 0;

        this.snake.x += this.snake.dx;
        this.snake.y += this.snake.dy;

        if (this.snake.x < 0) {
            this.snake.x = this.canvasW - this.grid;
        }
        else if (this.snake.x >= this.canvasW) {
            this.snake.x = 0;
        }

        if (this.snake.y < 0) {
            this.snake.y = this.canvasH - this.grid;
        }
        else if (this.snake.y >= this.canvasH) {
            this.snake.y = 0;
        }

        this.snake.cells.unshift({x: this.x, y: this.y});

        if (this.snake.cells.length > this.snake.maxCells) {
            this.snake.cells.pop();
        }

        this.snake.cells.forEach((cell, index) => {
            if (cell.x === this.apple.x && cell.y === this.apple.y) {
                this.snake.maxCells++;
                this.apple.x = this.getRandomInt(0, 25) * this.grid;
                this.apple.y = this.getRandomInt(0, 25) * this.grid;
            }

            for (let i = index + 1; i < this.snake.cells.length; i++) {
            
                if (cell.x === this.snake.cells[i].x && cell.y === this.snake.cells[i].y) {
                    this.snake.x = 160;
                    this.snake.y = 160;
                    this.snake.cells = [];
                    this.snake.maxCells = 4;
                    this.snake.dx = this.grid;
                    this.snake.dy = 0;

                    this.apple.x = this.getRandomInt(0, 25) * this.grid;
                    this.apple.y = this.getRandomInt(0, 25) * this.grid;
                }
            }
        });

        this.frameCount++;
    }
}

let gameinstance = new Snake();
for (var i = 0 ; i < 10000 ; i++){
    gameinstance.mainLoop();
}