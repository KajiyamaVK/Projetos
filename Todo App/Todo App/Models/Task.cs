using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Todo_App.Models
{
    public class Task
    {
        public string iditem { get; set; }
        public string idUsuario { get; set; }
        public string descricao { get; set; }
        public string  concluido { get; set; }

        public Task()
        {

        }
    }
}
