using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Fidelity.Controllers
{
    [Route("clientes")]
    [ApiController]
    public class ClientesController : Controller
    {
        public List<Clientes> Index()
        {
            return View();
        }
    }
}
