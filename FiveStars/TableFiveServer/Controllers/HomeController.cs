using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace TableFiveServer.Controllers
{
    [Route("")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        public ApiMain Index()
        {
            return new ApiMain();
        }
    }
}
