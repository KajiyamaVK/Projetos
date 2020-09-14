using System;
using System.Security.Cryptography.X509Certificates;
using TableFive.Models;
using TableFive.Repository;

namespace TableFive
{
    class Program
    {
        static void Main(string[] args)
        {
            MenuInicial mi = new MenuInicial();
            mi.AbrirMenuInicial();



               

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
