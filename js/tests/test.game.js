(function() {
    describe('the universe of the Game of Life', function() {
        it('should be an infinite two-dimensional orthogonal grid of square cells', function() {
            var game1 = new gol.Game({ rows: 1, cols: 1 })
              , game3 = new gol.Game()
              , game100 = new gol.Game({ rows: 100, cols: 110 });
              
            expect(game1.rows).to.be(1);
            expect(game1.cols).to.be(1);

            expect(game3.rows).to.be(3);
            expect(game3.cols).to.be(3);

            expect(game100.rows).to.be(100);
            expect(game100.cols).to.be(110);
        });
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
              horizontally, vertically, or diagonally adjacent', function() {
        describe('3x3 grid', function() {
            var game = new gol.Game({ rows: 3, cols: 3 });
            describe('top left cell', function() {
                it('should have 3 neighbors', function() {
                    expect(game.grid[0][0].neighbors).to.have.length(3);
                });
            });
            describe('top right cell', function() {
                it('should have 3 neighbors', function() {
                    expect(game.grid[0][2].neighbors).to.have.length(3);
                });
            });
            describe('bottom left cell', function() {
                it('should have 3 neighbors', function() {
                    expect(game.grid[2][0].neighbors).to.have.length(3);
                });
            });
            describe('bottom right cell', function() {
                it('should have 3 neighbors', function() {
                    expect(game.grid[2][2].neighbors).to.have.length(3);
                });
            });

            describe('top mid cell', function() {
                it('should have 5 neighbors', function() {
                    expect(game.grid[0][1].neighbors).to.have.length(5);
                });
            });
            describe('bottom mid cell', function() {
                it('should have 5 neighbors', function() {
                    expect(game.grid[2][1].neighbors).to.have.length(5);
                });
            });
            describe('left mid cell', function() {
                it('should have 5 neighbors', function() {
                    expect(game.grid[1][0].neighbors).to.have.length(5);
                });
            });
            describe('right mid cell', function() {
                it('should have 5 neighbors', function() {
                    expect(game.grid[1][2].neighbors).to.have.length(5);
                });
            });
            
            describe('center cell', function() {
                it('should have 8 neighbors', function() {
                    expect(game.grid[1][1].neighbors).to.have.length(8);
                });
            });
        });
    });
    
    describe('at each step in time, the following transitions occur', function() {
        describe('any live cell with fewer than two live neighbours should die, as if\
                  caused by under-population.', function() {
            describe('0 live neighbors', function() {
                it('it should die', function() {
                    var g = new gol.Game().init([[0,0,0]
                                                ,[0,1,0]
                                                ,[0,0,0]]);
                    g.tick();
                    expect(g.grid[1][1].isAlive).not.to.be.ok();
                });
            });
            
            describe('1 live neighbor', function() {
                it('it should die', function() {
                    var g = new gol.Game().init([[0,0,0]
                                                ,[0,1,1]
                                                ,[0,0,0]]);
                    g.tick();
                    expect(g.grid[1][1].isAlive).not.to.be.ok();
                });
            });
        });

        describe('any live cell with two or three live neighbours should live on to\
                  the next generation.', function() {
            describe('2 live neighbors', function() {
                it('it should live', function() {
                    var g = new gol.Game().init([[0,0,1]
                                                ,[0,1,0]
                                                ,[1,0,0]]);
                    g.tick();
                    expect(g.grid[1][1].isAlive).to.be.ok();
                });
            });

            describe('3 live neighbors', function() {
                it('it should live', function() {
                    var g = new gol.Game().init([[0,1,0]
                                                ,[1,1,0]
                                                ,[0,0,1]]);
                    g.tick();
                    expect(g.grid[1][1].isAlive).to.be.ok();
                });
            });
        });

        describe('any live cell with more than three live neighbours should die, as\
                  if by overcrowding.', function() {
            describe('4 live neighbors', function() {
                it('it should die', function() {
                    var g = new gol.Game().init([[0,1,0]
                                                ,[1,1,1]
                                                ,[0,0,1]]);
                    g.tick();
                    expect(g.grid[1][1].isAlive).not.to.be.ok();
                });
            });

            describe('5 live neighbors', function() {
                it('it should die', function() {
                    var g = new gol.Game().init([[0,1,1]
                                                ,[1,1,1]
                                                ,[0,0,1]]);
                    g.tick();
                    expect(g.grid[1][1].isAlive).not.to.be.ok();
                });
            });

            describe('6 live neighbors', function() {
                it('it should die', function() {
                    var g = new gol.Game().init([[1,1,1]
                                                ,[1,1,1]
                                                ,[0,0,1]]);
                    g.tick();
                    expect(g.grid[1][1].isAlive).not.to.be.ok();
                });
            });

            describe('7 live neighbors', function() {
                it('it should die', function() {
                    var g = new gol.Game().init([[1,1,0]
                                                ,[1,1,1]
                                                ,[1,1,1]]);
                    g.tick();
                    expect(g.grid[1][1].isAlive).not.to.be.ok();
                });
            });

            describe('8 live neighbors', function() {
                it('it should die', function() {
                    var g = new gol.Game().init([[1,1,1]
                                                ,[1,1,1]
                                                ,[1,1,1]]);
                    g.tick();
                    expect(g.grid[1][1].isAlive).not.to.be.ok();
                });
            });
        });

        describe('any dead cell with exactly three live neighbours should become a\
                  live cell, as if by reproduction.', function() {
                  
            describe('0 live neighbors', function() {
                it('it should die', function() {
                    var g = new gol.Game().init([[0,0,0]
                                                ,[0,0,0]
                                                ,[0,0,0]]);
                    g.tick();
                    expect(g.grid[1][1].isAlive).not.to.be.ok();
                });
            });
            
            describe('1 live neighbor', function() {
                it('it should die', function() {
                    var g = new gol.Game().init([[0,0,0]
                                                ,[0,0,1]
                                                ,[0,0,0]]);
                    g.tick();
                    expect(g.grid[1][1].isAlive).not.to.be.ok();
                });
            });

            describe('2 live neighbors', function() {
                it('it should die', function() {
                    var g = new gol.Game().init([[0,0,1]
                                                ,[0,0,0]
                                                ,[1,0,0]]);
                    g.tick();
                    expect(g.grid[1][1].isAlive).not.to.be.ok();
                });
            });

            describe('3 live neighbors', function() {
                it('it should live', function() {
                    var g = new gol.Game().init([[0,1,0]
                                                ,[1,0,0]
                                                ,[0,0,1]]);
                    g.tick();
                    expect(g.grid[1][1].isAlive).to.be.ok();
                });
            });

            describe('4 live neighbors', function() {
                it('it should die', function() {
                    var g = new gol.Game().init([[0,1,0]
                                                ,[1,0,1]
                                                ,[0,0,1]]);
                    g.tick();
                    expect(g.grid[1][1].isAlive).not.to.be.ok();
                });
            });

            describe('5 live neighbors', function() {
                it('it should die', function() {
                    var g = new gol.Game().init([[0,1,1]
                                                ,[1,0,1]
                                                ,[0,0,1]]);
                    g.tick();
                    expect(g.grid[1][1].isAlive).not.to.be.ok();
                });
            });

            describe('6 live neighbors', function() {
                it('it should die', function() {
                    var g = new gol.Game().init([[1,1,1]
                                                ,[1,0,1]
                                                ,[0,0,1]]);
                    g.tick();
                    expect(g.grid[1][1].isAlive).not.to.be.ok();
                });
            });

            describe('7 live neighbors', function() {
                it('it should die', function() {
                    var g = new gol.Game().init([[1,1,0]
                                                ,[1,0,1]
                                                ,[1,1,1]]);
                    g.tick();
                    expect(g.grid[1][1].isAlive).not.to.be.ok();
                });
            });

            describe('8 live neighbors', function() {
                it('it should die', function() {
                    var g = new gol.Game().init([[1,1,1]
                                                ,[1,0,1]
                                                ,[1,1,1]]);
                    g.tick();
                    expect(g.grid[1][1].isAlive).not.to.be.ok();
                });
            });
            
        });
    });
    
    describe('reporting', function() {
        function FakeReporter() {
            this.numTimesUpdateCalled = 0;
            this.lastGrid = null;
            this.update = function updated(grid) {
                this.numTimesUpdateCalled++;
                this.lastGrid = grid;
            };
        };
        
        it('should report grid values when init is called', function() {
            var g = new gol.Game()
              , r = new FakeReporter();
            g.addReporter(r);
            g.init([[0,0,0]
                   ,[0,0,0]
                   ,[0,0,0]]);
            expect(r.lastGrid).to.be.ok();
            expect(r.lastGrid.length).to.be(3);
            expect(r.numTimesUpdateCalled).to.be(1);
        });
        
        it('should report grid values when tick is called', function() {
            var g = new gol.Game()
              , r = new FakeReporter();
            g.addReporter(r);
            g.tick();
            expect(r.lastGrid).to.be.ok();
            expect(r.lastGrid.length).to.be(3);
            expect(r.numTimesUpdateCalled).to.be(1);
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
