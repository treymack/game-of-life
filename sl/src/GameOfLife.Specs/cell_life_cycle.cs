using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using GameOfLife.Model;
using Machine.Specifications;

namespace GameOfLife.Specs
{
    [Subject(typeof(Cell))]
    public class when_initializing_a_cell
    {
        private static Cell cell;

        Because of = () => cell = new Cell();
        It should_be_alive = () => cell.IsAlive.ShouldBeTrue();
    }
}
