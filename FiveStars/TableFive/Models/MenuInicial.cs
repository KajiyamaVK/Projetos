using System;
using System.Collections.Generic;
using System.Text;

namespace TableFive.Models
{
    public class MenuInicial
    {
                    string ConteudoMenuInicial = "" +
                   "//////////////////////////////////////////////\n" +
                   "/////  Seja muito bem vindo ao TableFive /////\n" +
                   "//////////////////////////////////////////////\n" +
                   "" +
                   "" +
                   "\n\n" +
                   "1 - Abrir Mesa\n" +
                   "2 - Gerenciamento\n" +
                   "3 - Fechar TableFive\n" +
                   "\n\n\n\n";

        public void AbrirMenuInicial()
        {
            Console.Write(ConteudoMenuInicial);
            Console.WriteLine("Digite a opção desejada...");
            var retorno = Console.ReadKey(true).KeyChar;


            switch (retorno)
            {
                case '1':
                    Console.WriteLine("Mesa aberta");
                    Console.WriteLine("Pressione qualquer tecla para continuar");
                    Console.ReadKey();
                    break;
                case '2':
                    MenuGerenciamento mg = new MenuGerenciamento();
                    mg.AbrirMenuGerenciamento();
                    break;
                case '3':
                    Console.WriteLine("Fechando TableFive");
                    Console.WriteLine("Pressione qualquer tecla para continuar");
                    Console.ReadKey();
                    Environment.Exit(0);
                    break;

                default:
                    Console.WriteLine("Você digitou um opção inválida");
                    Console.WriteLine("Pressione qualquer tecla para tentar novamente");
                    Console.ReadKey();
                    break;
            }
            Console.Clear();
            AbrirMenuInicial();

            //ConexaoBanco cb = new ConexaoBanco();
            //try
            //{
            //    Console.WriteLine(cb.con);
            //    cb.con.Open();
            //    Console.WriteLine("Deu certo");
            //    cb.con.Close();

            //} catch (Exception err)
            //{
            //    Console.WriteLine(err);
            //}

            

        
        }
    }
}
