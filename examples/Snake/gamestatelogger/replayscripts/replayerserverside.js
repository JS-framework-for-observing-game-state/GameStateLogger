class Snake {

    frameCount = 0;
    canvasW = 400;
    canvasH = 400;
    grid = 16;
    count = 0;
    constructor() {
        this.dx = 1;
        this.dy = 0;
        this.cells = [];
        this.maxCells = 4;
        this.x = 160;
        this.y = 160;
    }

    apple = {x: 320, y: 320};

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    collisionSnake(){
        this.cells.forEach((cell, index) => {
        if (cell.x === this.apple.x && cell.y === this.apple.y) {
            this.maxCells++;
            this.apple.x = this.getRandomInt(0, 25) * this.grid;
            this.apple.y = this.getRandomInt(0, 25) * this.grid;
            return "Ate apple!";
        }

        for (let i = index + 1; i < this.cells.length; i++) {
        
            if (cell.x === this.cells[i].x && cell.y === this.cells[i].y) {
                this.x = 160;
                this.y = 160;
                this.cells = [];
                this.maxCells = 4;
                this.dx = this.grid;
                this.dy = 0;
                this.apple.x = getRandomInt(0, 25) * grid;
                this.apple.y = getRandomInt(0, 25) * grid;
                return "Dead";
            }
        }
        });

    }
    mainLoop(){
        if (++this.count < 4) {
            return;
        }

        this.x += this.dx;
        this.y += this.dy;

        if (this.x < 0) {
            this.x = this.canvasW - this.grid;
        }
        else if (this.x >= this.canvasW) {
            this.x = 0;
        }

        if (this.y < 0) {
            this.y = this.canvasH - this.grid;
        }
        else if (this.y >= this.canvasH) {
            this.y = 0;
        }

        this.cells.unshift({x: this.x, y: this.y});

        if (this.cells.length > this.maxCells) {
            this.cells.pop();
        }


        this.collisionSnake();
        this.frameCount++;

    }

    moveSnake(e) {
        if (e === 37 && snake.dx === 0) {
            snake.dx = -grid;
            snake.dy = 0;
        }
        // up arrow key
        else if (e === 38 && snake.dy === 0) {
            snake.dy = -grid;
            snake.dx = 0;
        }
        // right arrow key
        else if (e === 39 && snake.dx === 0) {
            snake.dx = grid;
            snake.dy = 0;
        }
        // down arrow key
        else if (e === 40 && snake.dy === 0) {
            snake.dy = grid;
            snake.dx = 0;
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
console.log("Max time: " + maxTime);
console.log("First element: " + JSON.stringify(element));

for(var i = 0; i < maxTime + 1; i+=16){
    gameInstance.mainLoop();
    if (element === null) {
        break;
    }
    if(i === element.eventTime){
        switch (element.eventName) {
            case 37:
                gameInstance.moveSnake(37);
                break;
            case 38:
                gameInstance.moveSnake(38);
                break;
            case 39:
                gameInstance.moveSnake(39);
                break;
            case 40:
                gameInstance.moveSnake(40);
                break;
           /* case "Ate apple!":
                valid = (element.points === gameInstance.snake.maxCells);
                break;*/
            default:
                if (element.gameEnd === true) {
                    valid = gameInstance.collisionSnake() === "Dead";
                    console.log("HELLO");
                }
                break;
        }
        element = GAMEDATA[nextElement];
        nextElement+=1; 
        if (nextElement >= GAMEDATA.length) {
            element = null;
        }
    }

}

console.log("Was game run valid?: " + valid);