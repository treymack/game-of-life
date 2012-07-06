using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace GameOfLife.Model
{
    public class Game
    {
        public int Rows { get; set; }
        public int Cols { get; set; }

        public Game(int rows, int cols)
        {
            this.Rows = rows;
            this.Cols = cols;
        }

        public List<List<Cell>> Board { get; set; }
    }
}
