class Snake {
    constructor() {
        this.canvasW = 400;
        this.canvasH = 400;
        this.grid = 16;
        this.count = 0;
        this.frameCount = 0;
    }

    snake = {
        x: 160,
        y: 160,

        dx: 16,
        dy: 0,

        cells: [],
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
        if (++this.count < 16) {
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

        this.snake.cells.unshift({x: this.snake.x, y: this.snake.y})

        if (this.snake.cells.length > this.snake.maxCells) {
            this.snake.cells.pop();
        }

        this.frameCount++;
    }

    moveSnake(e) {
        if (e === 37 && this.snake.dx === 0) {
            this.snake.dx = -this.grid;
            this.snake.dy = 0;
            
        }
        else if (e === 38 && this.snake.dy === 0) {
            this.snake.dy = -this.grid;
            this.snake.dx = 0;
            
        }
        else if (e === 39 && this.snake.dx === 0) {
            this.snake.dx = this.grid;
            this.snake.dy = 0;

        }
        else if (e === 40 && this.snake.dy === 0) {
            this.snake.dy = this.grid;
            this.snake.dx = 0;

        }
        this.frameCount++;
    }

}

var valid = false;

let gameInstance = new Snake();

let GAMEDATA = [{"ID":"./JSONfiles/mopse0f70.4fsnvis81xi3.json","eventName":"keyDown","keyPressed":40,"eventTime":159,"points":4},{"ID":"./JSONfiles/mopse0f70.4fsnvis81xi3.json","eventName":"keyDown","keyPressed":39,"eventTime":207,"points":4},{"ID":"./JSONfiles/mopse0f70.4fsnvis81xi3.json","eventName":"keyDown","keyPressed":40,"eventTime":230,"points":4},{"ID":"./JSONfiles/mopse0f70.4fsnvis81xi3.json","eventName":"keyDown","keyPressed":37,"eventTime":350,"points":4},{"ID":"./JSONfiles/mopse0f70.4fsnvis81xi3.json","level":"Ate apple!","eventTime":355,"points":5},{"ID":"./JSONfiles/mopse0f70.4fsnvis81xi3.json","eventName":"Random seed: Apple x","randomSeed":0,"eventTime":355},{"ID":"./JSONfiles/mopse0f70.4fsnvis81xi3.json","eventName":"Random seed: Apple y","randomSeed":176,"eventTime":355},{"ID":"./JSONfiles/mopse0f70.4fsnvis81xi3.json","eventName":"keyDown","keyPressed":38,"eventTime":689,"points":5},{"ID":"./JSONfiles/mopse0f70.4fsnvis81xi3.json","level":"Ate apple!","eventTime":820,"points":6},{"ID":"./JSONfiles/mopse0f70.4fsnvis81xi3.json","eventName":"Random seed: Apple x","randomSeed":48,"eventTime":820},{"ID":"./JSONfiles/mopse0f70.4fsnvis81xi3.json","eventName":"Random seed: Apple y","randomSeed":64,"eventTime":820},{"ID":"./JSONfiles/mopse0f70.4fsnvis81xi3.json","eventName":"keyDown","keyPressed":39,"eventTime":859,"points":6},{"ID":"./JSONfiles/mopse0f70.4fsnvis81xi3.json","eventName":"keyDown","keyPressed":38,"eventTime":903,"points":6},{"ID":"./JSONfiles/mopse0f70.4fsnvis81xi3.json","level":"Ate apple!","eventTime":982,"points":7},{"ID":"./JSONfiles/mopse0f70.4fsnvis81xi3.json","eventName":"Random seed: Apple x","randomSeed":240,"eventTime":982},{"ID":"./JSONfiles/mopse0f70.4fsnvis81xi3.json","eventName":"Random seed: Apple y","randomSeed":112,"eventTime":982},{"ID":"./JSONfiles/mopse0f70.4fsnvis81xi3.json","eventName":"keyDown","keyPressed":39,"eventTime":998,"points":7},{"ID":"./JSONfiles/mopse0f70.4fsnvis81xi3.json","eventName":"keyDown","keyPressed":40,"eventTime":1090,"points":7},{"ID":"./JSONfiles/mopse0f70.4fsnvis81xi3.json","eventName":"keyDown","keyPressed":39,"eventTime":1139,"points":7},{"ID":"./JSONfiles/mopse0f70.4fsnvis81xi3.json","level":"Ate apple!","eventTime":1225,"points":8},{"ID":"./JSONfiles/mopse0f70.4fsnvis81xi3.json","eventName":"Random seed: Apple x","randomSeed":112,"eventTime":1225},{"ID":"./JSONfiles/mopse0f70.4fsnvis81xi3.json","eventName":"Random seed: Apple y","randomSeed":352,"eventTime":1225},{"ID":"./JSONfiles/mopse0f70.4fsnvis81xi3.json","eventName":"keyDown","keyPressed":40,"eventTime":1242,"points":8},{"ID":"./JSONfiles/mopse0f70.4fsnvis81xi3.json","eventName":"keyDown","keyPressed":37,"eventTime":1322,"points":8},{"ID":"./JSONfiles/mopse0f70.4fsnvis81xi3.json","eventName":"keyDown","keyPressed":40,"eventTime":1464,"points":8},{"ID":"./JSONfiles/mopse0f70.4fsnvis81xi3.json","level":"Ate apple!","eventTime":1628,"points":9},{"ID":"./JSONfiles/mopse0f70.4fsnvis81xi3.json","eventName":"Random seed: Apple x","randomSeed":16,"eventTime":1628},{"ID":"./JSONfiles/mopse0f70.4fsnvis81xi3.json","eventName":"Random seed: Apple y","randomSeed":144,"eventTime":1628},{"ID":"./JSONfiles/mopse0f70.4fsnvis81xi3.json","eventName":"keyDown","keyPressed":39,"eventTime":1645,"points":9},{"ID":"./JSONfiles/mopse0f70.4fsnvis81xi3.json","eventName":"keyDown","keyPressed":38,"eventTime":1676,"points":9},{"ID":"./JSONfiles/mopse0f70.4fsnvis81xi3.json","eventName":"keyDown","keyPressed":37,"eventTime":1703,"points":9},{"ID":"./JSONfiles/mopse0f70.4fsnvis81xi3.json","gameEnd":true,"eventName":"Game over!","eventTime":1711,"points":9,"highscore":"n/a"}];
//37: left. 38: up. 39: right. 40: down.
var maxTime = GAMEDATA[GAMEDATA.length - 1].eventTime;

var element = GAMEDATA[0];
var nextElement = 1;

for(var i = 0; i <= maxTime; i++) {
    if(i === element.eventTime){
        if (element.eventTime === maxTime) {
            gameInstance.mainLoop();
            valid = gameInstance.collisionSnake() === "Dead";
            console.log("Game valid? " + valid);
            break;
        }

        if(element != null && element.level === "Ate apple!"){
            gameInstance.snake.maxCells++;
            
            element = GAMEDATA[nextElement];
            nextElement+=1;
            gameInstance.apple.x = element.randomSeed;
            
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
            gameInstance.frameCount--;
        }

        nextElement+=1; 
        
        if (nextElement >= GAMEDATA.length + 1) {
            element = null;
        }
    } else {
        gameInstance.mainLoop();
    }
}

//return valid;