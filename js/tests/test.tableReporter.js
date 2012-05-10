(function() {
    describe('table reporter', function() {
        function isActive(reporter, row, col) {
            return $($(reporter.$div.find('tr')[row]).find('td')[col]).attr('bgcolor') == 'red'
        };
        
        it('should lay out a table when initialized', function() {
            var r = new gol.TableReporter();
            expect(r.$div.find('table').length).to.be.ok();
        });
        
        it('should update table cells on init', function() {
            var g = new gol.Game()
              , r = new gol.TableReporter({ game: g });
            g.addReporter(r);
            g.init([[0,1,0]
                   ,[1,0,1]
                   ,[0,1,0]]);
                   
            expect(isActive(r, 0, 0)).not.to.be.ok();
            expect(isActive(r, 0, 1)).to.be.ok();
            expect(isActive(r, 0, 2)).not.to.be.ok();
            expect(isActive(r, 1, 0)).to.be.ok();
            expect(isActive(r, 1, 1)).not.to.be.ok();
            expect(isActive(r, 1, 2)).to.be.ok();
            expect(isActive(r, 2, 0)).not.to.be.ok();
            expect(isActive(r, 2, 1)).to.be.ok();
            expect(isActive(r, 2, 2)).not.to.be.ok();
        });
        
        it('should update table cells on update', function() {
            var g = new gol.Game({ rows: 5, cols: 5 })
              , r = new gol.TableReporter({ game: g });
            g.addReporter(r);
            g.init([[0,0,0,0,0]
                   ,[0,0,1,0,0]
                   ,[0,0,1,0,0]
                   ,[0,0,1,0,0]
                   ,[0,0,0,0,0]]);
            g.tick();
            
            $('#mocha').append(r.$div);
                   
            expect(isActive(r, 0, 0)).not.to.be.ok();
            expect(isActive(r, 0, 1)).not.to.be.ok();
            expect(isActive(r, 0, 2)).not.to.be.ok();
            expect(isActive(r, 0, 3)).not.to.be.ok();
            expect(isActive(r, 0, 4)).not.to.be.ok();
            expect(isActive(r, 1, 0)).not.to.be.ok();
            expect(isActive(r, 1, 1)).not.to.be.ok();
            expect(isActive(r, 1, 2)).not.to.be.ok();
            expect(isActive(r, 1, 3)).not.to.be.ok();
            expect(isActive(r, 1, 4)).not.to.be.ok();
            expect(isActive(r, 2, 0)).not.to.be.ok();
            expect(isActive(r, 2, 1)).to.be.ok();
            expect(isActive(r, 2, 2)).to.be.ok();
            expect(isActive(r, 2, 3)).to.be.ok();
            expect(isActive(r, 2, 4)).not.to.be.ok();
            expect(isActive(r, 3, 0)).not.to.be.ok();
            expect(isActive(r, 3, 1)).not.to.be.ok();
            expect(isActive(r, 3, 2)).not.to.be.ok();
            expect(isActive(r, 3, 3)).not.to.be.ok();
            expect(isActive(r, 3, 4)).not.to.be.ok();
            expect(isActive(r, 4, 0)).not.to.be.ok();
            expect(isActive(r, 4, 1)).not.to.be.ok();
            expect(isActive(r, 4, 2)).not.to.be.ok();
            expect(isActive(r, 4, 3)).not.to.be.ok();
            expect(isActive(r, 4, 4)).not.to.be.ok();
        });
    });
})();
