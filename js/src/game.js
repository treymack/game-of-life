var gol = (function() {
    function GameFunc(options) {
        
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
