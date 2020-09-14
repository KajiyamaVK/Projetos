using System;
using System.Collections.Generic;
using System.Text;

namespace TableFiveServer.Models
{
    public class PessoaJuridica:Pessoa
    {
        public string Cpf { get; set; }
        public DateTime DataNascimento { get; set; }

        public PessoaJuridica(
                            string primeironome
                            , string sobrenome) : base(primeironome, sobrenome)
        { }
    }
}
