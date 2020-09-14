using System;
using System.Collections.Generic;
using System.Text;

namespace TableFiveServer.Models
{
    public class Telefone
    {
        public string Numero { get; private set; }
        public bool isCelular { get; private set; } 
        public bool isWhatsapp { get; private set; }
        public string Complemento { get; set; }

        public Telefone (   
                            string numero
                            ,bool iscelular
                            ,bool iswhatsapp
                        )
        {
            this.Numero = numero;
            this.isCelular = iscelular;
            this.isWhatsapp = iscelular == false ? false :  iswhatsapp;
        }

        public Telefone(
                        string numero
                        ,bool iscelular
                        , bool iswhatsapp
                        , string complemento
                        )
        {
            this.Numero = numero;
            this.isCelular = iscelular;
            this.isWhatsapp = iscelular == false ? false : iswhatsapp;
            this.Complemento = complemento;
        }
    }

   
}
