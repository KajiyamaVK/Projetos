using Dapper;
using MySql.Data.MySqlClient;
using Renci.SshNet.Security.Cryptography;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
using TableFive.Models;

namespace TableFive.Repository
{
    public class ClienteBD
    {
        ConexaoBanco cb = new ConexaoBanco();
        List<PessoaFisica> ListaPf { get; set; }
        public string Id { get; set; }
        public string Nome { get; set; }
        public string Sobrenome { get; set; }


        public ClienteBD()
        {

        }


        public List<PessoaFisica> BuscarCliente(string value)
        {
            
            var query = $"select * from clientes where nome like '{value}'";
            PessoaFisica pf;
            ListaPf = new List<PessoaFisica>();
            var cmd = new MySqlCommand(query, cb.con);
            
            cb.con.Open();
            var dr = cmd.ExecuteReader();
            if (dr.HasRows)
            {
                while (dr.Read())
                {

                    dr.Read();
                    Id = dr.GetString(0);
                    Nome = dr.GetString(1);
                    Sobrenome = dr.GetString(2);
                    pf = new PessoaFisica(Nome, Sobrenome);

                    pf.Id = int.Parse(Id);
                    ListaPf.Add(pf);

                }
                dr.Close();
                
            }
            cb.con.Close();

            return ListaPf;
        }

    }
}
