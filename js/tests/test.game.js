(function() {
    describe('the universe of the Game of Life', function() {
        it('should be an infinite two-dimensional orthogonal grid of square cells');
    });
    
    describe('a cell', function() {
        it('should be in one of two possible states, alive or dead.', function() {
            var cell = new gol.Cell();
            cell.live();
            expect(cell.isAlive).to.be.ok();
            cell.die();
            expect(cell.isAlive).not.to.be.ok();
            cell.live();
            expect(cell.isAlive).to.be.ok();
        });
    });
    
    describe('every cell interacts with its eight neighbours, which are the cells that are\
    horizontally, vertically, or diagonally adjacent. at each step in time, the\
    following transitions occur', function() {

        describe('any live cell with fewer than two live neighbours', function() {
            it('should die, as if caused by under-population.');
        });

        describe('any live cell with two or three live neighbours', function() {
            it('should live on to the next generation.');
        });

        describe('any live cell with more than three live neighbours', function() {
            it('should die, as if by overcrowding.');
        });

        describe('any dead cell with exactly three live neighbours', function() {
            it('should become a live cell, as if by reproduction.');
        });
    });

    /*
    describe('the initial pattern', function() {
        it('should constitute the seed of the system.');
    });
    describe('the first generation is created by applying the above rules simultaneously to every cell in the\
    seed-births and deaths occur simultaneously, and the discrete moment at which\
    this happens is sometimes called a tick (in other words, each generation is a\
    pure function of the preceding one). The rules continue to be applied repeatedly\
    to create further generations.', function() { });
    */
})();
