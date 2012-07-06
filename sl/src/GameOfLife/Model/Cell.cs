using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace GameOfLife.Model
{
    public class Cell
    {
        public bool IsAlive { get; set; }

        public Cell()
        {
            IsAlive = true;
        }
    }
}
