using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Todo_App.Controllers
{
    [Route("")]
    [ApiController]
    public class IndexController : ControllerBase
    {
        public Index Index()
        {
            return new Index();
        }
    }
}
