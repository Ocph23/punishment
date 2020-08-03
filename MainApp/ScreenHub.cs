using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace MainApp
{
    public class ScreenHub:Hub
    {
        private System.Timers.Timer timer = new System.Timers.Timer();
        List<Screen> screens = new List<Screen>() {
            new Screen { Id=1, Name= "Screen" },
            new Screen { Id=2, Name= "Screen" },
            new Screen { Id=3, Name= "Screen" },
            new Screen { Id=4, Name= "Screen" },

        };
        public ScreenHub()
        {
            timer.Interval = 10000;
            timer.Elapsed += Timer_Elapsed;

        }

        private async void Timer_Elapsed(object sender, System.Timers.ElapsedEventArgs e)
        {
           
          
        }

        public Task ScreenData(string screen)
        {
            return Clients.All.SendAsync("recieveScreenData", screen);
        }
    }                                           



    public class Screen
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
