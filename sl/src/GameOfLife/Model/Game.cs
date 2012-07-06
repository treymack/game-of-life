using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace GameOfLife.Model
{
    public class Game
    {
        public int NumberOfRows { get; set; }
        public int NumberOfCols { get; set; }

        public List<List<Cell>> Board { get; set; }
    }
}
