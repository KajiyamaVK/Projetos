using System;
using System.Collections.Generic;
using System.Text;

namespace TableFive.Models
{
    class MenuGerenciamentoClientes
    {

        public string Menu =
           "///////////////////////////////////////////////////////////////////////////\n" +
           "///////////////////////////   Clientes    /////////////////////////////////\n" +
           "///////////////////////////////////////////////////////////////////////////\n\n\n\n" +
           "" +
           "" +
           "" +
           "" +
           "1 - Buscar clientes\n" +
           "2 - Cadastrar clientes\n" +
           "3 - Voltar ao menu anterior\n\n\n\n" +
           "Comando:";

        char retorno;

        public void AbrirMenuClientes()

        {
            Console.Clear();
            Console.WriteLine(Menu);
            retorno = Console.ReadKey(true).KeyChar;
            switch (retorno)
            {
                case '1':
                    BuscaClientes bc = new BuscaClientes();
                    bc.MostrarBuscarClientes();
                    break;
                case '2':
                    Console.WriteLine("Abrindo tela de cadastro de clientes");
                    Console.WriteLine("Pressione qualquer tecla para continuar");
                    Console.ReadKey();
                    break;
                case '3':
                    break;
                default:
                    Console.WriteLine("Você digitou um opção inválida");
                    Console.WriteLine("Pressione qualquer tecla para tentar novamente");
                    Console.ReadKey();
                    break;
            }
            if (retorno != '3')
                AbrirMenuClientes();
        }


    }
}
