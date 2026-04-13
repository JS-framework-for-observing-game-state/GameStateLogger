class Snake {
    constructor() {
        this.frameCount = 0;
        this.canvasW = 400;
        this.canvasH = 400;
        this.grid = 16;
        this.count = 0;
        this.frameCount = 0;

        this.canvas = document.getElementById('game');
        this.context = this.canvas.getContext('2d');
    }

    snake = {
        x: 160,
        y: 160,

        // snake velocity. moves one grid length every frame in either the x or y direction
        dx: 16, //hard-coded grid number
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

    collisionSnake() {
        var answer = "";
        this.snake.cells.forEach((cell, index) => {
            for (let i = index + 1; i < this.snake.cells.length; i++) {
                if (cell.x === this.snake.cells[i].x && cell.y === this.snake.cells[i].y) {
                    this.snake.x = 160;
                    this.snake.y = 160;

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

        this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
        
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

        this.snake.cells.unshift({x: this.snake.x, y: this.snake.y})

        if (this.snake.cells.length > this.snake.maxCells) {
            this.snake.cells.pop();
        }

        // draw apple
        this.context.fillStyle = 'red';
        this.context.fillRect(this.apple.x, this.apple.y, this.grid-1, this.grid-1);

        // draw snake one cell at a time
        this.context.fillStyle = 'green';
        
        this.context.fillRect(this.snake.cells[0].x, this.snake.cells[0].y, this.grid-1, this.grid-1);
        this.snake.cells.forEach(cell => {
            // drawing 1 px smaller than the grid creates a grid effect in the snake body so you can see how long it is
            this.context.fillRect(cell.x, cell.y, this.grid-1, this.grid-1);
        });

        this.frameCount++;
    }

    moveSnake(e) {
        if (e === 37 && this.snake.dx === 0) {
            this.snake.dx = -this.grid;
            this.snake.dy = 0;
            console.log("Moved snake left.");
        }
        // up arrow key
        else if (e === 38 && this.snake.dy === 0) {
            this.snake.dy = -this.grid;
            this.snake.dx = 0;
            console.log("Moved snake up.");
        }
        // right arrow key
        else if (e === 39 && this.snake.dx === 0) {
            this.snake.dx = this.grid;
            this.snake.dy = 0;
            console.log("Moved snake right.");
        }
        // down arrow key
        else if (e === 40 && this.snake.dy === 0) {
            this.snake.dy = this.grid;
            this.snake.dx = 0;
            console.log("Moved snake down.");
        }
   }

}

var valid = false;

let gameInstance = new Snake();

let GAMEDATA =
[{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":40,"eventTime":112,"points":4},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":39,"eventTime":173,"points":4},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":40,"eventTime":233,"points":4},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":39,"eventTime":298,"points":4},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":40,"eventTime":366,"points":4},
{"ID":"mnwzcezl0.wdmv8f1mhp","level":"Ate apple!","eventTime":379,"points":5},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":37,"eventTime":382,"points":5},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":38,"eventTime":434,"points":5},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":39,"eventTime":488,"points":5},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":40,"eventTime":577,"points":5},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":37,"eventTime":590,"points":5},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":38,"eventTime":618,"points":5},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":37,"eventTime":669,"points":5},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":38,"eventTime":716,"points":5},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":39,"eventTime":776,"points":5},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":40,"eventTime":813,"points":5},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":37,"eventTime":852,"points":5},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":38,"eventTime":860,"points":5},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":37,"eventTime":912,"points":5},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":40,"eventTime":927,"points":5},
{"ID":"mnwzcezl0.wdmv8f1mhp","level":"Ate apple!","eventTime":939,"points":6},
{"ID":"mnwzcezl0.wdmv8f1mhp","level":"Ate apple!","eventTime":967,"points":7},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":39,"eventTime":991,"points":7},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":38,"eventTime":1044,"points":7},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":39,"eventTime":1094,"points":7},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":40,"eventTime":1123,"points":7},
{"ID":"mnwzcezl0.wdmv8f1mhp","level":"Ate apple!","eventTime":1159,"points":8},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":39,"eventTime":1173,"points":8},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":38,"eventTime":1199,"points":8},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":37,"eventTime":1242,"points":8},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":40,"eventTime":1284,"points":8},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":39,"eventTime":1338,"points":8},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":38,"eventTime":1374,"points":8},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":37,"eventTime":1419,"points":8},
{"ID":"mnwzcezl0.wdmv8f1mhp","level":"Ate apple!","eventTime":1435,"points":9},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":40,"eventTime":1450,"points":9},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":39,"eventTime":1492,"points":9},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":38,"eventTime":1520,"points":9},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":37,"eventTime":1555,"points":9},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":38,"eventTime":1592,"points":9},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":39,"eventTime":1636,"points":9},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":40,"eventTime":1702,"points":9},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":37,"eventTime":1720,"points":9},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":38,"eventTime":1786,"points":9},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":39,"eventTime":1816,"points":9},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":40,"eventTime":1870,"points":9},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":37,"eventTime":1889,"points":9},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":40,"eventTime":1938,"points":9},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":39,"eventTime":1992,"points":9},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":38,"eventTime":2016,"points":9},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":37,"eventTime":2046,"points":9},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":38,"eventTime":2076,"points":9},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":39,"eventTime":2117,"points":9},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":40,"eventTime":2173,"points":9},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":37,"eventTime":2188,"points":9},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":38,"eventTime":2247,"points":9},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":39,"eventTime":2271,"points":9},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":40,"eventTime":2322,"points":9},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":37,"eventTime":2341,"points":9},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":38,"eventTime":2418,"points":9},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":37,"eventTime":2507,"points":9},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":38,"eventTime":2593,"points":9},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":39,"eventTime":2610,"points":9},
{"ID":"mnwzcezl0.wdmv8f1mhp","level":"Ate apple!","eventTime":2627,"points":10},
{"ID":"mnwzcezl0.wdmv8f1mhp","level":"Ate apple!","eventTime":2679,"points":11},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":40,"eventTime":2695,"points":11},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":37,"eventTime":2737,"points":11},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":38,"eventTime":2744,"points":11},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":39,"eventTime":2775,"points":11},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":40,"eventTime":2792,"points":11},
{"ID":"mnwzcezl0.wdmv8f1mhp","eventName":"keyDown","keyPressed":37,"eventTime":2793,"points":11},
{"ID":"mnwzcezl0.wdmv8f1mhp","gameEnd":true,"eventName":"Game over!","eventTime":2795,"points":11,"highscore":"n/a"}]

var maxTime = GAMEDATA[GAMEDATA.length - 1].eventTime;

var element = GAMEDATA[0];
var nextElement = 1;

var i = 0;
const inter = setInterval(function() {
//for(var i = 0; i <= maxTime; i++) {
    gameInstance.mainLoop();
    console.log(element);
    if (element === null) {
        clearInterval(inter);
        //break;
    }
    
    if(i === element.eventTime){
        if (element.eventTime === maxTime) {
            valid = gameInstance.collisionSnake() === "Dead";
            //break;
        }

        if(element != null && element.level === "Ate apple!"){
            gameInstance.snake.maxCells++;
        }

        switch (element.eventName) {
            case "keyDown":
                switch (element.keyPressed) {
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
                    default:
                        break;
                }
            default:
                break;
        }

        element = GAMEDATA[nextElement];
        nextElement+=1; 
            
        
        if (nextElement >= GAMEDATA.length + 1) {
            element = null;
        }
    }
i++;}
, 10);
console.log("Was game run valid?: " + valid);