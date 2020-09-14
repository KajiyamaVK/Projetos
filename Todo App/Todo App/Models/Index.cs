using Microsoft.AspNetCore.Routing.Patterns;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Todo_App
{
    public class Index
    {
        List<string> routes { get; set; }
        
        public List<string> Routes { get { return this.routes; } }

        public Index()
        {
            routes = new List<string>();
            routes.Add("/Users");
            routes.Add("/Tasks");

        }
    }
   
}
