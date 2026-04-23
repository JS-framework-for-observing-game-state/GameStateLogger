class Snake {
    constructor() {
        this.canvasW = 400;
        this.canvasH = 400;
        this.grid = 16;
        this.count = 0;
        /* Below just for testing to confirm i and frameCount are synced.
        Matches timeStep from main game. */
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
                if (/*this.snake.cells[0]*/cell.x === this.snake.cells[i].x && /*this.snake.cells[0]*/cell.y === this.snake.cells[i].y) {
                    this.snake.x = 160;
                    this.snake.y = 160;

                    answer = "Dead";
                }
            }
        });
        return answer;
    }
    

    mainLoop(){
        if (++this.count < 16) {
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
        this.frameCount++;
    }

}

var valid = false;

let gameInstance = new Snake();

let GAMEDATA =
[{"ID":"moa154vo0.qog0lyyqros","eventName":"keyDown","keyPressed":40,"eventTime":293,"points":4},{"ID":"moa154vo0.qog0lyyqros","eventName":"keyDown","keyPressed":39,"eventTime":463,"points":4},{"ID":"moa154vo0.qog0lyyqros","level":"Ate apple!","eventTime":721,"points":5},{"ID":"moa154vo0.qog0lyyqros","eventName":"Random seed: Apple x","randomSeed":64,"eventTime":721},{"ID":"moa154vo0.qog0lyyqros","eventName":"Random seed: Apple y","randomSeed":16,"eventTime":721},{"ID":"moa154vo0.qog0lyyqros","eventName":"keyDown","keyPressed":38,"eventTime":735,"points":5},{"ID":"moa154vo0.qog0lyyqros","eventName":"keyDown","keyPressed":37,"eventTime":785,"points":5},{"ID":"moa154vo0.qog0lyyqros","eventName":"keyDown","keyPressed":38,"eventTime":1028,"points":5},{"ID":"moa154vo0.qog0lyyqros","eventName":"keyDown","keyPressed":39,"eventTime":1282,"points":5},{"ID":"moa154vo0.qog0lyyqros","eventName":"keyDown","keyPressed":38,"eventTime":1354,"points":5},{"ID":"moa154vo0.qog0lyyqros","eventName":"keyDown","keyPressed":37,"eventTime":1373,"points":5},{"ID":"moa154vo0.qog0lyyqros","level":"Ate apple!","eventTime":1447,"points":6},{"ID":"moa154vo0.qog0lyyqros","eventName":"Random seed: Apple x","randomSeed":336,"eventTime":1447},{"ID":"moa154vo0.qog0lyyqros","eventName":"Random seed: Apple y","randomSeed":336,"eventTime":1447},{"ID":"moa154vo0.qog0lyyqros","eventName":"keyDown","keyPressed":40,"eventTime":1466,"points":6},{"ID":"moa154vo0.qog0lyyqros","eventName":"keyDown","keyPressed":39,"eventTime":1796,"points":6},{"ID":"moa154vo0.qog0lyyqros","level":"Ate apple!","eventTime":2073,"points":7},{"ID":"moa154vo0.qog0lyyqros","eventName":"Random seed: Apple x","randomSeed":272,"eventTime":2073},{"ID":"moa154vo0.qog0lyyqros","eventName":"Random seed: Apple y","randomSeed":272,"eventTime":2073},{"ID":"moa154vo0.qog0lyyqros","eventName":"keyDown","keyPressed":38,"eventTime":2085,"points":7},{"ID":"moa154vo0.qog0lyyqros","eventName":"keyDown","keyPressed":37,"eventTime":2134,"points":7},{"ID":"moa154vo0.qog0lyyqros","eventName":"keyDown","keyPressed":38,"eventTime":2185,"points":7},{"ID":"moa154vo0.qog0lyyqros","eventName":"keyDown","keyPressed":37,"eventTime":2264,"points":7},{"ID":"moa154vo0.qog0lyyqros","eventName":"keyDown","keyPressed":40,"eventTime":2282,"points":7},{"ID":"moa154vo0.qog0lyyqros","level":"Ate apple!","eventTime":2334,"points":8},{"ID":"moa154vo0.qog0lyyqros","eventName":"Random seed: Apple x","randomSeed":384,"eventTime":2334},{"ID":"moa154vo0.qog0lyyqros","eventName":"Random seed: Apple y","randomSeed":160,"eventTime":2334},{"ID":"moa154vo0.qog0lyyqros","eventName":"keyDown","keyPressed":37,"eventTime":2369,"points":8},{"ID":"moa154vo0.qog0lyyqros","eventName":"keyDown","keyPressed":38,"eventTime":2411,"points":8},{"ID":"moa154vo0.qog0lyyqros","eventName":"keyDown","keyPressed":39,"eventTime":2553,"points":8},{"ID":"moa154vo0.qog0lyyqros","level":"Ate apple!","eventTime":2689,"points":9},{"ID":"moa154vo0.qog0lyyqros","eventName":"Random seed: Apple x","randomSeed":64,"eventTime":2689},{"ID":"moa154vo0.qog0lyyqros","eventName":"Random seed: Apple y","randomSeed":112,"eventTime":2689},{"ID":"moa154vo0.qog0lyyqros","eventName":"keyDown","keyPressed":38,"eventTime":2779,"points":9},{"ID":"moa154vo0.qog0lyyqros","level":"Ate apple!","eventTime":2818,"points":10},{"ID":"moa154vo0.qog0lyyqros","eventName":"Random seed: Apple x","randomSeed":112,"eventTime":2818},{"ID":"moa154vo0.qog0lyyqros","eventName":"Random seed: Apple y","randomSeed":112,"eventTime":2818},{"ID":"moa154vo0.qog0lyyqros","eventName":"keyDown","keyPressed":39,"eventTime":2825,"points":10},{"ID":"moa154vo0.qog0lyyqros","level":"Ate apple!","eventTime":2867,"points":11},{"ID":"moa154vo0.qog0lyyqros","eventName":"Random seed: Apple x","randomSeed":336,"eventTime":2867},{"ID":"moa154vo0.qog0lyyqros","eventName":"Random seed: Apple y","randomSeed":256,"eventTime":2867},{"ID":"moa154vo0.qog0lyyqros","eventName":"keyDown","keyPressed":40,"eventTime":2946,"points":11},{"ID":"moa154vo0.qog0lyyqros","eventName":"keyDown","keyPressed":39,"eventTime":3093,"points":11},{"ID":"moa154vo0.qog0lyyqros","eventName":"keyDown","keyPressed":38,"eventTime":3269,"points":11},{"ID":"moa154vo0.qog0lyyqros","level":"Ate apple!","eventTime":3270,"points":12},{"ID":"moa154vo0.qog0lyyqros","eventName":"Random seed: Apple x","randomSeed":304,"eventTime":3270},{"ID":"moa154vo0.qog0lyyqros","eventName":"Random seed: Apple y","randomSeed":160,"eventTime":3270},{"ID":"moa154vo0.qog0lyyqros","eventName":"keyDown","keyPressed":37,"eventTime":3345,"points":12},{"ID":"moa154vo0.qog0lyyqros","eventName":"keyDown","keyPressed":40,"eventTime":3532,"points":12},{"ID":"moa154vo0.qog0lyyqros","eventName":"keyDown","keyPressed":39,"eventTime":3574,"points":12},{"ID":"moa154vo0.qog0lyyqros","eventName":"keyDown","keyPressed":38,"eventTime":3614,"points":12},{"ID":"moa154vo0.qog0lyyqros","gameEnd":true,"eventName":"Game over!","eventTime":3642,"points":12,"highscore":"n/a"}]
var maxTime = GAMEDATA[GAMEDATA.length - 1].eventTime;

var element = GAMEDATA[0];
var nextElement = 1;

var i = 0;
const inter = setInterval(function() {
//for(var i = 0; i <= maxTime; i++) {
    /* Below just for testing, ensuring the i loop matches the frameCount
       which corresponds to timeSkip, logical time from main game.*/
    console.log(`i is ${i} and frameCount is ${gameInstance.frameCount}`);
    if(i === element.eventTime){
        if (element.eventTime === maxTime) {
            /* Run main loop before checking for death, as the check usually
               happens at the end of the main loop. */
            valid = gameInstance.collisionSnake() === "Dead";
            console.log(gameInstance.collisionSnake());
            gameInstance.mainLoop();
            valid = gameInstance.collisionSnake() === "Dead";
            console.log("Was game run valid?: " + valid);
            clearInterval(inter);
        }

        if(element != null && element.level === "Ate apple!"){
            gameInstance.snake.maxCells++;
            /* Remember that the game progresses when eating an apple, 
               usually happens in the end of the main loop. */
            gameInstance.frameCount++;
            element = GAMEDATA[nextElement];
            nextElement+=1;
            gameInstance.apple.x = element.randomSeed;
            // Progress the array to get the y element random seed.
            element = GAMEDATA[nextElement];
            nextElement+=1;
            gameInstance.apple.y = element.randomSeed;
            
            gameInstance.mainLoop();
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

        if (element != null && element.eventTime === i) {
            i--;
            // Keeping logical time consistent.
            gameInstance.frameCount--;
        }

        nextElement+=1; 
        
        if (nextElement >= GAMEDATA.length + 1) {
            element = null;
        }
    } else {
        /* As moves are independent of the main loop, main loop is only
           executed when a move is not. */
        gameInstance.mainLoop();
    }
    i++;
}, 10);
