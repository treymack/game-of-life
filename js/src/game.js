var gol = (function() {
    function GameFunc(options) {
        options = _.extend({
            rows: 3
          , cols: 3
        }, options);
        this.rows = options.rows;
        this.cols = options.cols;
        
        this.grid = [];
        for (var r = 0; r < this.rows; r++) {
            this.grid.push([]);
            for (var c = 0; c < this.cols; c++) {
                this.grid[r].push(new CellFunc());
            }
        }

        for (var r = 0; r < this.rows; r++) {
            for (var c = 0; c < this.cols; c++) {
                var n = this.grid[r][c].neighbors = [];
                for (var nR = -1; nR <= 1; nR++) {
                    for (var nC = -1; nC <= 1; nC++) {
                        var realRow = r + nR
                          , realCol = c + nC;
                        if (!(nR == 0 && nC == 0) // not the mid row
                                && realRow >= 0 && realRow < this.rows && realCol >= 0 && realCol < this.cols) // on the grid
                            n.push(this.grid[realRow][realCol]);
                    }
                }
            }
        }
    };
    
    function CellFunc(options) {
        this.isAlive = false;
    };
    
    CellFunc.prototype.live = function live() {
        this.isAlive = true;
    };
    CellFunc.prototype.die = function die() {
        this.isAlive = false;
    };
    
    return {
        Game: GameFunc
      , Cell: CellFunc
    };
})();
