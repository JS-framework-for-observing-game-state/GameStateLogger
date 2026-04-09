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

    mainLoop(){
        if (++this.count < 4) {
            return;
        }

        this.frameCount = 0;

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

        this.cells.forEach((cell, index) => {
            if (cell.x === this.apple.x && cell.y === this.apple.y) {
                this.maxCells++;
                this.apple.x = this.getRandomInt(0, 25) * this.grid;
                this.apple.y = this.getRandomInt(0, 25) * this.grid;
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
                }
            }
        });

        this.frameCount++;

    }

}