class Snake {
    constructor() {
        this.frameCount = 0;
        this.canvasW = 400;
        this.canvasH = 400;
        this.grid = 16;
        this.count = 0;
        this.frameCount = 0;
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

    collisionSnake(){
        var answer = "";
        this.snake.cells.forEach((cell, index) => {
            if (cell.x === this.apple.x && cell.y === this.apple.y) {
                this.snake.maxCells++;
                this.apple.x = this.getRandomInt(0, 25) * this.grid;
                this.apple.y = this.getRandomInt(0, 25) * this.grid;
                
                answer = "Ate apple!";
            }

            for (let i = index + 1; i < this.snake.cells.length; i++) {
            
                if (cell.x === this.snake.cells[i].x && cell.y === this.snake.cells[i].y) {
                    console.log("dead")
                    this.snake.x = 160;
                    this.snake.y = 160;
                    this.snake.cells = [];
                    this.snake.maxCells = 4;
                    this.snake.dx = this.grid;
                    this.snake.dy = 0;

                    this.apple.x = this.getRandomInt(0, 25) * this.grid;
                    this.apple.y = this.getRandomInt(0, 25) * this.grid;
                    
                    answer = "Dead";
                }
            }
        });
        return answer;
    }
    

    mainLoop(){
        if (++this.count < 4) {
            this.frameCount++;
            return;
        }
        this.count = 0;

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


        //this.collisionSnake();
        this.frameCount++;

    }

    moveSnake(e) {
        if (e === 37 && this.snake.dx === 0) {
            this.snake.dx = -this.grid;
            this.snake.dy = 0;
            console.log("moved snake left")
        }
        // up arrow key
        else if (e === 38 && this.snake.dy === 0) {
            this.snake.dy = -this.grid;
            this.snake.dx = 0;
            console.log("moved snake up")
        }
        // right arrow key
        else if (e === 39 && this.snake.dx != 0) {
            console.log("move right issue, dx is " + this.snake.dx)
        }
        else if (e === 39 && this.snake.dx === 0) {
            this.snake.dx = this.grid;
            this.snake.dy = 0;
            console.log("moved snake right")
        }
        // down arrow key
        else if (e === 40 && this.snake.dy === 0) {
            this.snake.dy = this.grid;
            this.snake.dx = 0;
            console.log("moved snake down dx is " + this.snake.dx)
        }
   }

}

var valid = false;

let gameInstance = new Snake();

let GAMEDATA =
[{"ID":"mnrhsleh0.2h3ulkcdt2v","eventName":"ArrowDown","eventTime":32,"points":4},
{"ID":"mnrhsleh0.2h3ulkcdt2v","eventName":"ArrowRight","eventTime":43,"points":4},
{"ID":"mnrhsleh0.2h3ulkcdt2v","eventName":"ArrowUp","eventTime":45,"points":4},
{"ID":"mnrhsleh0.2h3ulkcdt2v","eventName":"ArrowRight","eventTime":54,"points":4},
{"ID":"mnrhsleh0.2h3ulkcdt2v","eventName":"ArrowDown","eventTime":55,"points":4},
{"ID":"mnrhsleh0.2h3ulkcdt2v","level":"Ate apple!","eventTime":62,"points":5},
{"ID":"mnrhsleh0.2h3ulkcdt2v","eventName":"ArrowLeft","eventTime":64,"points":5},
{"ID":"mnrhsleh0.2h3ulkcdt2v","eventName":"ArrowUp","eventTime":65,"points":5},
{"ID":"mnrhsleh0.2h3ulkcdt2v","eventName":"ArrowRight","eventTime":66,"points":5},
{"ID":"mnrhsleh0.2h3ulkcdt2v","gameEnd":true,"eventName":"Game over!","eventTime":66,"points":5,"highscore":"n/a"}]

var maxTime = GAMEDATA[GAMEDATA.length - 1].eventTime;
var element = GAMEDATA[0];
var nextElement = 1;

for(var i = 0; i < maxTime + 1; i++){
    if (element === null) {
        console.log((nextElement-1) + "was null")
        break;
    }
    
    if(i === element.eventTime){
        console.log(element);
        switch (element.eventName) {
            case "ArrowLeft":
                gameInstance.moveSnake(37);
                break;
            case "ArrowUp":
                gameInstance.moveSnake(38);
                break;
            case "ArrowRight":
                gameInstance.moveSnake(39);
                if (element.eventTime === 66) {
                    valid = gameInstance.collisionSnake() === "Dead";
                    console.log("Game end true? " + valid);
                }
                break;
            case "ArrowDown":
                gameInstance.moveSnake(40);
                break;
            default:
                /*if (element.gameEnd === true) {
                    console.log("snake max cells: " + gameInstance.snake.maxCells)
                    valid = gameInstance.this.collisionSnake() === "Dead";
                    console.log("Game end true? " + valid);
                } else*/ if (element.level === "Ate apple!") {
                    //valid = (element.points === gameInstance.snake.maxCells);
                    gameInstance.snake.maxCells++;
                    console.log("snake ate apple? ");
                }
                break;
        }

        element = GAMEDATA[nextElement];
        nextElement+=1; 
            
        
        if (nextElement >= GAMEDATA.length + 1) {
            element = null;
        }
        gameInstance.mainLoop();
    }
}

console.log("Was game run valid?: " + valid);