using System;
using System.Collections.Generic;
using System.Text;

namespace TableFive.Models
{
    public class MenuGerenciamento
    {
        public string Menu =
            "///////////////////////////////////////////////////////////////////////////\n" +
            "///////////////////////////   Gerenciamento    ////////////////////////////\n" +
            "///////////////////////////////////////////////////////////////////////////\n\n\n\n" +
            "" +
            "" +
            "" +
            "" +
            "1 - Gerenciamento de clientes\n" +
            "2 - Gerenciamento de empresas\n" +
            "3 - Voltar ao menu anterior\n\n\n\n" +
            "Comando:";

        char retorno;

        public void AbrirMenuGerenciamento()
            
        {
            Console.Clear();
            Console.WriteLine(Menu);
            retorno = Console.ReadKey(true).KeyChar;
            switch (retorno)
            {
                case '1':
                    MenuGerenciamentoClientes mgc = new MenuGerenciamentoClientes();
                    mgc.AbrirMenuClientes();
                    break;
                case '2':
                    Console.WriteLine("Abrindo cadastro de empresas");
                    Console.WriteLine("Pressione qualquer tecla para continuar");
                    Console.ReadKey();
                    break;
                case '3':
                    
                    break;
            }
            if (retorno != '3')
            AbrirMenuGerenciamento();
        }


    }
}
