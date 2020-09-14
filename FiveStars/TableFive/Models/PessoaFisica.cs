using System;
using System.Collections.Generic;
using System.Text;

namespace TableFive.Models
{
    public class PessoaFisica : Pessoa
    {
        public string Cpf { get; set; }
        public DateTime DataNascimento { get; set; }

        public PessoaFisica(
                            string primeironome
                            ,string sobrenome): base(primeironome,sobrenome)
        { 
            
        }
        

    }
}
