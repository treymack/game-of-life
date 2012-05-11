var gol = gol || {};
_.extend(gol,
(function($) {
    function TableReporterFunc(options) {
        options = _.extend({
            game: new gol.Game()
          , div: '<div />' // jQuery'd later
        }, options);
        
        this.$div = $(options.div);
        this.game = options.game;
        
        // set up the table
        var $table = $('<table border="1" cellpadding="5" cellspacing="5" />');
        this.$div.append($table);
        var aSingleRow;
        for (var r = 0; r < this.game.rows; r++) {
            aSingleRow = '<tr>';
            for (var c = 0; c < this.game.cols; c++) {
                aSingleRow += '<td>&nbsp;</td>';
            }
            aSingleRow += '</tr>';
            $table.append(aSingleRow);
        }
        
		this.$tds = []
        for (var r = 0; r < this.game.rows; r++) {
			this.$tds.push([]);
            for (var c = 0; c < this.game.cols; c++) {
                this.$tds[r].push($($($table.find('tr')[r]).find('td')[c]));
			}
		}
    };
    
    TableReporterFunc.prototype.update = function update(grid) {
        var $table = this.$div.find('table');
        for (var r = 0; r < this.game.rows; r++)
            for (var c = 0; c < this.game.cols; c++) {
                this.$tds[r][c].attr('bgcolor', this.game.grid[r][c].isAlive ? 'red' : 'white');
            }
    };
    
    return {
        TableReporter: TableReporterFunc
    };
})(jQuery)
// _.extend
);
