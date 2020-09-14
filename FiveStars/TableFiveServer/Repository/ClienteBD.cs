using Dapper;
using MySql.Data.MySqlClient;
using Renci.SshNet.Security.Cryptography;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
using TableFiveServer.Models;

namespace TableFiveServer.Repository
{
    public class ClienteBD
    {

        List<PessoaFisica> ListaPf { get; set; }
        public string Id { get; set; }
        public string Nome { get; set; }
        public string Sobrenome { get; set; }
        public string IdEmpresa { get; set; }

        private string _cpf;
        public string Cpf { get { return _cpf; } set { _cpf = value == "null" ? "null" : $"'{value}'"; } }
        public string DataNascimento {get;set;}


        public ClienteBD()
        {
                        
        }


        public static List<PessoaFisica> BuscarCliente(string value)
        {
            ConexaoBanco cb = new ConexaoBanco();
            var query = $"select * from clientes where {value}";
            var ListaPf = new List<PessoaFisica>();
            var cmd = new MySqlCommand(query, cb.con);
            
            cb.con.Open();
            var dr = cmd.ExecuteReader();
            if (dr.HasRows)
            {
                while (dr.Read())
                {
                    ListaPf.Add(new PessoaFisica(dr.GetString(1),
                                                dr.GetString(2))
                    {
                        Id = int.Parse(dr.GetString(0))
                    }
                                );


                }
                dr.Close();
                
            }
            cb.con.Close();
            cb.con.Dispose();

            return ListaPf;
        }

        public string Gravar()
        {
            
            ConexaoBanco cb = new ConexaoBanco();
            //string VerificationQuery = $"select * from clientes where cpf ={this.Cpf}";
            string query;
            this.IdEmpresa = this.IdEmpresa == "" ? "null" : this.IdEmpresa;
            if (Id==null) {
                query = $"insert into clientes (nome, sobrenome,idEmpresa,Cpf,DataNascimento) values ('{this.Nome}','{this.Sobrenome}',{this.IdEmpresa},{this.Cpf},{this.DataNascimento})";
            }
            else
            {
                query = $"update clientes set nome=@nome, sobrenome=@sobrenome,idEmpresa=@idempresa,Cpf=@cpf,DataNascimento=@DataNascimento) where id={Id}";
            }

            MySqlCommand cmd = new MySqlCommand(query, cb.con);
            //MySqlCommand Verification = new MySqlCommand(VerificationQuery , cb.con);
            try
            {
                cb.con.Open();
                
                //if (Verification.ExecuteScalar() != null)
                //    return "Cliente com mesmo CPF já cadastrado";

                cmd.ExecuteNonQuery();

                cb.con.Close();
                cb.con.Dispose();
            }
            catch (MySqlException err)
            {
                return $"Erro ao gravar cliente: Numero: {err.Number} Msg: {err}";
                
            }
        


            return "Gravado com sucesso";
        }

    }
}
