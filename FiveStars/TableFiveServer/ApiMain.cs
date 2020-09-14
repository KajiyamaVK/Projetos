using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TableFiveServer
{
    public class ApiMain
    {
       List<string> rotas { get; set; } 
       public List<string> Rotas { get { return this.rotas; } }

        public ApiMain()
        {
            rotas = new List<string>();
            rotas.Add("/Clientes");
        }
    }
}
