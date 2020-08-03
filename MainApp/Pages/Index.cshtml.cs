using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Timers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Logging;

namespace MainApp.Pages {
    public class IndexModel : PageModel {
        private readonly ILogger<IndexModel> _logger;
        private readonly IHubContext<ScreenHub> hub;

        public List<string> screens { get; set; }
        public List<Employee> Employees { get; set; }

        public IndexModel (ILogger<IndexModel> logger, IHubContext<ScreenHub> hubContext) {
            _logger = logger;
            hub = hubContext;
        }

        public void OnGet () {
            screens = new List<string> () { "Screen ", "Screen ", "Screen ", "Screen ", "Screen " };
            Employees = new List<Employee> () {
                new Employee { Name = "Chandra Saputra", Job = "Mechanic", Age = 35, Company = "Chandra Electic Service", Photo = "https://img-cdn.tid.al/o/6dc39fec4427c4f9f759c1f2c44137bec7366e4c.png" },
                new Employee { Name = "Deny Siregar", Job = "Kurir", Age = 35, Company = "Catur Perkasa", Photo = "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg" },
                new Employee { Name = "Ujang Winarto", Job = "Mechanic", Age = 35, Company = "Rendra Anjungan Jaya", Photo = "https://www.w3schools.com/w3images/team2.jpg" },
                new Employee { Name = "Krist", Age = 35, Job = "Supervisior", Company = "Octagon Service", Photo = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTaHpln8mQK6f_Ov26yf0CFycenoQxJWG5mXA&usqp=CAU" },
                new Employee { Name = "Aji Latuperisa", Job = "Driver", Age = 35, Company = "Travel Service", Photo = "https://www.swamisantadasinstituteofculture.com/wp-content/uploads/2019/09/FakeDP.jpeg" },
                new Employee { Name = "Aji Latuperisa", Job = "Driver", Age = 35, Company = "Travel Service", Photo = "https://www.swamisantadasinstituteofculture.com/wp-content/uploads/2019/09/FakeDP.jpeg" },
                new Employee { Name = "Aji Latuperisa", Job = "Driver", Age = 35, Company = "Travel Service", Photo = "https://www.swamisantadasinstituteofculture.com/wp-content/uploads/2019/09/FakeDP.jpeg" },
                new Employee { Name = "Aji Latuperisa", Job = "Driver", Age = 35, Company = "Travel Service", Photo = "https://www.swamisantadasinstituteofculture.com/wp-content/uploads/2019/09/FakeDP.jpeg" },
            };

        }

    }

}