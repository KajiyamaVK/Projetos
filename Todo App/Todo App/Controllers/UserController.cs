using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Todo_App.Repository;

namespace Todo_App.Controllers
{
    [Route("users")]
    [ApiController]
    public class UserController : Controller
    {
        

        [HttpGet]
        [Route("auth")]
        public bool authData(string email, string senha)
        {
            string Validacao = $"select 1 from users where email='{email}' and senha='{senha}'";
            return userDB.auth(Validacao);
        }

        [HttpPost]
        [Route("save")]
        public string Insert([FromBody] userDB userdb)
        {
            return userdb.save();
        }


    }
}
