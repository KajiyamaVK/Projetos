using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;
using TableFive.Repository;

namespace TableFive.Models
{
    public class BuscaClientes
    {
        
        string ConteudoBusca { get; set; }
        List<PessoaFisica> ListaPf { get; set; }
        string Resultado { get;  set; }

       public void MostrarBuscarClientes()
        {
            const string msg1 = "" +
            "///////////////////////////////////////////////////////////\n" +
            "/////////////////////   BUSCA DE CLIENTE   ////////////////\n" +
            "///////////////////////////////////////////////////////////\n\n\n\n" +
            "Digite o nome do cliente. Caso deseje procurar o nome pela PARTE dele, utilize o sinal '%' antes ou depois do texto.\n\n\n\n\n" +
            "Nome a ser procurado:";
            Console.Clear();
            Console.WriteLine(msg1);
            ConteudoBusca = Console.ReadLine();

            ClienteBD cbd = new ClienteBD();
            ListaPf = cbd.BuscarCliente(ConteudoBusca);
            bool PrimeiroRegistro = true;
            foreach (var item in ListaPf)
            {
                if (PrimeiroRegistro)
                {
                    PrimeiroRegistro = false;
                    Console.Clear();
                    Console.WriteLine("Resultados de 1 - 10\n\n\n");
                }

                Console.WriteLine($"ID  : {item.Id}");
                Console.WriteLine($"Nome: {item.PrimeiroNome} {item.Sobrenome}");
                Console.WriteLine("\n");
            }
            Console.ReadKey();
        }

        
    }
}
