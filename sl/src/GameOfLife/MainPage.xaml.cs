using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Shapes;
using GameOfLife.Model;

namespace GameOfLife
{
    public partial class MainPage : UserControl
    {
        public MainPage()
        {
            InitializeComponent();
        }

        private void UserControl_Loaded(object sender, RoutedEventArgs e)
        {
            var g = new Game();
            for (var r = 0; r < g.NumberOfRows; r++)
            {
                this.LayoutRoot.RowDefinitions.Add(new RowDefinition());
            }
        }
    }
}
