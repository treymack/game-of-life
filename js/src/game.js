var gol = gol || {};
_.extend(gol,
(function() {
    function setupGrid(game) {
        game.grid = [];
        for (var r = 0; r < game.rows; r++) {
            game.grid.push([]);
            for (var c = 0; c < game.cols; c++) {
                game.grid[r].push(new CellFunc());
            }
        }
    };
    
    function setupNeighbors(game) {
        for (var r = 0; r < game.rows; r++) {
            for (var c = 0; c < game.cols; c++) {
                var n = game.grid[r][c].neighbors = [];
                for (var nR = -1; nR <= 1; nR++) {
                    for (var nC = -1; nC <= 1; nC++) {
                        var realRow = r + nR
                          , realCol = c + nC;
                        if (!(nR == 0 && nC == 0) // not the mid row
                                && realRow >= 0 && realRow < game.rows && realCol >= 0 && realCol < game.cols) // on the grid
                            n.push(game.grid[realRow][realCol]);
                    }
                }
            }
        }
    }
    
    function GameFunc(options) {
        options = _.extend({
            rows: 3
          , cols: 3
        }, options);
        this.reporters = [];
        this.rows = options.rows;
        this.cols = options.cols;
        
        setupGrid(this);
        setupNeighbors(this);
    };
    
    GameFunc.prototype.report = function report() {
        var self = this;
        _.each(this.reporters, function(reporter) {
            reporter.update(self.grid);
        });
    };

    GameFunc.prototype.init = function init(initRows) {
        if (initRows.length != this.rows)
            throw 'row count does not match';
            
        for (var r = 0; r < this.rows; r++)
        {
            if (initRows[r].length != this.cols)
                throw 'col count does not match';
            
            for (var c = 0; c < this.cols; c++) {
                this.grid[r][c][(initRows[r][c] ? 'live' : 'die')]();
            }
        }

        this.report();
        
        return this;
    };
    
    GameFunc.prototype.tick = function tick() {
        var cellsToMakeLive = [], cellsToMakeDie = [];
        _.each(this.grid, function(row) {
            _.each(row, function(cell) {
                var numberOfAliveNeighbors = _.filter(cell.neighbors, function(neighbor) {
                    return neighbor.isAlive;
                }).length;
                
                if (!cell.isAlive && numberOfAliveNeighbors === 3)
                    cellsToMakeLive.push(cell);
                
                if (cell.isAlive)
                    if (!(numberOfAliveNeighbors === 2 || numberOfAliveNeighbors === 3))
                        cellsToMakeDie.push(cell);
            });
        });
        
        _.each(cellsToMakeLive, function(cell) {
            cell.live();
        });

        _.each(cellsToMakeDie, function(cell) {
            cell.die();
        });
        
        this.report();
    };
    
    GameFunc.prototype.addReporter = function addReporter(reporter) {
        this.reporters.push(reporter);
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
})()
// _.extend
);
