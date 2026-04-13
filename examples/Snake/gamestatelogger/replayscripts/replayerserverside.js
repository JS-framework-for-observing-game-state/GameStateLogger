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
[{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":40,"eventTime":50,"points":4},
    {"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":37,"eventTime":94,"points":4},
    {"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":38,"eventTime":129,"points":4},
    {"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":39,"eventTime":159,"points":4},
    {"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":40,"eventTime":188,"points":4},
    {"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":37,"eventTime":226,"points":4},
    {"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":38,"eventTime":254,"points":4},
    {"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":39,"eventTime":296,"points":4},
    {"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":40,"eventTime":319,"points":4},
    {"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":39,"eventTime":367,"points":4},
    {"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":38,"eventTime":395,"points":4},
    {"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":39,"eventTime":444,"points":4},
    {"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":40,"eventTime":499,"points":4},
    {"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":39,"eventTime":532,"points":4},
    {"ID":"mnx643dk0.e76abwnc2tn","level":"Ate apple!","eventTime":555,"points":5},
    {"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":38,"eventTime":590,"points":5},
    {"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":39,"eventTime":637,"points":5},
    {"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":38,"eventTime":712,"points":5},
    {"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":37,"eventTime":727,"points":5},
    {"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":40,"eventTime":787,"points":5},
    {"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":37,"eventTime":860,"points":5},
    {"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":38,"eventTime":919,"points":5},
    {"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":37,"eventTime":962,"points":5},
    {"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":38,"eventTime":1010,"points":5},
    {"ID":"mnx643dk0.e76abwnc2tn","level":"Ate apple!","eventTime":1031,"points":6},
    {"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":39,"eventTime":1059,"points":6},
    {"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":40,"eventTime":1120,"points":6},
    {"ID":"mnx643dk0.e76abwnc2tn","level":"Ate apple!","eventTime":1171,"points":7},
    {"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":37,"eventTime":1185,"points":7},
    {"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":40,"eventTime":1247,"points":7},
    {"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":39,"eventTime":1275,"points":7},
    {"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":38,"eventTime":1325,"points":7},
    {"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":37,"eventTime":1353,"points":7},
    {"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":40,"eventTime":1388,"points":7},
    {"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":37,"eventTime":1408,"points":7},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":38,"eventTime":1444,"points":7},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":39,"eventTime":1476,"points":7},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":40,"eventTime":1528,"points":7},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":37,"eventTime":1554,"points":7},{"ID":"mnx643dk0.e76abwnc2tn","level":"Ate apple!","eventTime":1595,"points":8},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":38,"eventTime":1602,"points":8},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":39,"eventTime":1634,"points":8},{"ID":"mnx643dk0.e76abwnc2tn","level":"Ate apple!","eventTime":1675,"points":9},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":38,"eventTime":1697,"points":9},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":37,"eventTime":1733,"points":9},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":40,"eventTime":1742,"points":9},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":37,"eventTime":1849,"points":9},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":40,"eventTime":1895,"points":9},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":39,"eventTime":1965,"points":9},{"ID":"mnx643dk0.e76abwnc2tn","level":"Ate apple!","eventTime":1999,"points":10},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":38,"eventTime":2022,"points":10},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":37,"eventTime":2039,"points":10},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":38,"eventTime":2054,"points":10},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":39,"eventTime":2079,"points":10},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":38,"eventTime":2094,"points":10},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":37,"eventTime":2106,"points":10},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":38,"eventTime":2134,"points":10},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":39,"eventTime":2235,"points":10},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":40,"eventTime":2273,"points":10},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":37,"eventTime":2297,"points":10},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":38,"eventTime":2308,"points":10},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":39,"eventTime":2340,"points":10},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":40,"eventTime":2355,"points":10},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":37,"eventTime":2360,"points":10},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":38,"eventTime":2380,"points":10},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":37,"eventTime":2421,"points":10},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":40,"eventTime":2446,"points":10},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":39,"eventTime":2497,"points":10},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":38,"eventTime":2507,"points":10},{"ID":"mnx643dk0.e76abwnc2tn","level":"Ate apple!","eventTime":2507,"points":11},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":37,"eventTime":2522,"points":11},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":40,"eventTime":2583,"points":11},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":39,"eventTime":2601,"points":11},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":38,"eventTime":2668,"points":11},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":37,"eventTime":2707,"points":11},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":40,"eventTime":2732,"points":11},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":39,"eventTime":2795,"points":11},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":38,"eventTime":2806,"points":11},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":37,"eventTime":2818,"points":11},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":38,"eventTime":2833,"points":11},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":39,"eventTime":2897,"points":11},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":40,"eventTime":2933,"points":11},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":37,"eventTime":3019,"points":11},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":38,"eventTime":3028,"points":11},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":39,"eventTime":3043,"points":11},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":40,"eventTime":3058,"points":11},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":37,"eventTime":3083,"points":11},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":40,"eventTime":3142,"points":11},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":39,"eventTime":3171,"points":11},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":40,"eventTime":3231,"points":11},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":39,"eventTime":3424,"points":11},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":40,"eventTime":3521,"points":11},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":39,"eventTime":3545,"points":11},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":38,"eventTime":3599,"points":11},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":39,"eventTime":3641,"points":11},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":40,"eventTime":3703,"points":11},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":37,"eventTime":3798,"points":11},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":38,"eventTime":3810,"points":11},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":39,"eventTime":3898,"points":11},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":40,"eventTime":3923,"points":11},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":37,"eventTime":4007,"points":11},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":38,"eventTime":4014,"points":11},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":37,"eventTime":4075,"points":11},{"ID":"mnx643dk0.e76abwnc2tn","level":"Ate apple!","eventTime":4079,"points":12},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":40,"eventTime":4107,"points":12},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":39,"eventTime":4176,"points":12},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":40,"eventTime":4283,"points":12},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":37,"eventTime":4333,"points":12},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":38,"eventTime":4337,"points":12},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":37,"eventTime":4463,"points":12},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":38,"eventTime":4478,"points":12},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":39,"eventTime":4606,"points":12},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":40,"eventTime":4622,"points":12},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":37,"eventTime":4641,"points":12},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":38,"eventTime":4662,"points":12},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":39,"eventTime":4689,"points":12},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":40,"eventTime":4698,"points":12},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":37,"eventTime":4714,"points":12},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":38,"eventTime":4743,"points":12},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":39,"eventTime":4777,"points":12},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":38,"eventTime":4822,"points":12},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":37,"eventTime":4824,"points":12},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":40,"eventTime":4876,"points":12},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":39,"eventTime":4886,"points":12},{"ID":"mnx643dk0.e76abwnc2tn","eventName":"keyDown","keyPressed":38,"eventTime":4898,"points":12},
    {"ID":"mnx643dk0.e76abwnc2tn","gameEnd":true,"eventName":"Game over!","eventTime":4903,"points":12,"highscore":"n/a"}]

     

var maxTime = GAMEDATA[GAMEDATA.length - 1].eventTime;

var element = GAMEDATA[0];
var nextElement = 1;

var i = 0;
const inter = setInterval(function() {
//for(var i = 0; i <= maxTime; i++) {
    gameInstance.mainLoop();
    /*
    if (element === null) {
        clearInterval(inter);
        //break;
    }
        */
    
    if(i === element.eventTime){
        if (element.eventTime === maxTime) {
            valid = gameInstance.collisionSnake() === "Dead";
            console.log("Was game run valid?: " + valid);
            clearInterval(inter);
            console.log("log is not cleared");
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

        if (element.eventTime === maxTime) {
            console.log("still running");
        }
        element = GAMEDATA[nextElement];

        
        if (element != null && element.eventTime === i){
            i--;
        }



        nextElement+=1; 
            
        
        if (nextElement >= GAMEDATA.length + 1) {
            element = null;
        }
        
    }
i++;}
, 5);
