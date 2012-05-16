var gol = gol || {};
_.extend(gol,
(function($) {
    var NUM_PIXELS = 10;
      
    function CanvasReporterFunc(options) {
        options = _.extend({
            game: new gol.Game()
          , div: '<div />' // jQuery'd later
        }, options);
        
        this.$div = $(options.div);
        this.game = options.game;
        
        this.width = NUM_PIXELS * this.game.cols;
        this.height = NUM_PIXELS * this.game.rows;
        this.$canvas = $('<canvas width="' + this.width + '" height="' + this.height + '" />');
        this.ctx = this.$canvas[0].getContext('2d');
        
        this.$div.append(this.$canvas);
    };
    
    CanvasReporterFunc.prototype.update = function update(grid) {
        this.clear();
        for (var r = 0; r < this.game.rows; r++)
            for (var c = 0; c < this.game.cols; c++) {
                this.rect(c * NUM_PIXELS, r * NUM_PIXELS, NUM_PIXELS, NUM_PIXELS, grid[r][c].isAlive ? 'red' : 'white');
            }
    };

    CanvasReporterFunc.prototype.rect = function rect(x, y, w , h, color) {
        this.ctx.fillStyle = color;
        this.ctx.beginPath();
        this.ctx.rect(x, y, w, h);
        this.ctx.closePath();
        this.ctx.fill();
    };
    
    CanvasReporterFunc.prototype.clear = function clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    };
    
    return {
        CanvasReporter: CanvasReporterFunc
    };
})(jQuery)
// _.extend
);
