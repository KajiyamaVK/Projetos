using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TableFiveServer.Models;
using TableFiveServer.Repository;

namespace TableFiveServer.Controllers
{
    [Route("clientes")]
    [ApiController]
    public class ClientesController : ControllerBase
    {   
        [HttpGet]
        [Route("")]
        public List<PessoaFisica> Index(string id, string nome, string sobrenome, string idempresa, string datanascimento)
        {
            
            string ConteudoBusca="";

            ConteudoBusca += id == "null" ? "id like '%'" : $"id like '{id}'";
            ConteudoBusca += nome == "null" ? "" : $" and nome like '{nome}'";
            ConteudoBusca += sobrenome == "null" ? "" : $" and sobrenome like '{sobrenome}'";
            ConteudoBusca += idempresa == "null" ? "" : $"and idempresa like '{idempresa}'";
            ConteudoBusca += datanascimento == "null" ? "" : $"and DataNascimento like '{datanascimento}'";

            ConteudoBusca = ConteudoBusca.Replace('_', '%');

            return ClienteBD.BuscarCliente(ConteudoBusca);
        }


        [HttpPost]
        [Route("gravar")]
        public string Insert([FromBody]ClienteBD clienteBD)
        {

            return clienteBD.Gravar();
        }

        [HttpPut]
        [Route("atualizar/{id}")]
        public string Update(string id, [FromBody] ClienteBD clienteBD)
        {
            clienteBD.Id = id;

            return clienteBD.Gravar();
        }

    }
}
