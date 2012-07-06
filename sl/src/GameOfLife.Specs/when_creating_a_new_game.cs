using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Machine.Specifications;
using GameOfLife.Model;

namespace GameOfLife.Specs
{
    [Subject(typeof(Game))]
    public class when_creating_a_new_game_with_1_row_and_1_col
    {
        private static Game game;

        Because of = () => game = new Game(rows: 1, cols: 1);

        It should_have_1_row = () => game.Rows.ShouldEqual(1);
        It should_have_1_col = () => game.Cols.ShouldEqual(1);
    }
}
