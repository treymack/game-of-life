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

    [Subject(typeof(Game))]
    public class when_creating_a_new_game_with_default_rows_and_cols
    {
        private static Game game;

        Because of = () => game = new Game();

        It should_have_3_rows = () => game.Rows.ShouldEqual(3);
        It should_have_3_cols = () => game.Cols.ShouldEqual(3);
    }

    [Subject(typeof(Game))]
    public class when_creating_a_new_game_with_100_row_and_110_col
    {
        private static Game game;

        Because of = () => game = new Game(rows: 100, cols: 110);

        It should_have_100_row = () => game.Rows.ShouldEqual(100);
        It should_have_110_col = () => game.Cols.ShouldEqual(110);
    }
}
