using System;
using System.Collections.Generic;
using System.Text;

namespace TableFive.Models
{
    public class Pessoa
    {
        public int Id { get; set; }
        public string PrimeiroNome { get; private set; }
        public string Sobrenome { get; set; }
        public List<Telefone>telefone { get; set; }


        public Pessoa(  string primeironome
                        ,string sobrenome)
        {
            this.PrimeiroNome = primeironome;
            this.Sobrenome = sobrenome;
            

        }

        

        
    }

}

    
