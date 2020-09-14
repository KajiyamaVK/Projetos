using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;
using Todo_App.Controllers;

namespace Todo_App.Repository
{
    public class userDB
    {
        public string email { get; set; }
        public string senha { get; set; }
        public string nomeUsuario { get; set; }

        public userDB()
        {

        }


        public static bool auth(string query)
        {
            dbConn Conection = new dbConn();
            SqlCommand command = new SqlCommand(query, Conection.con);

            Conection.con.Open();
            var dr = command.ExecuteScalar();
            Conection.con.Close();
            Conection.con.Dispose();
            bool result = dr==null?false:Convert.ToBoolean(dr);
            return result;
        }

        public string save()
        {
            string query = $"insert into users values ('{this.nomeUsuario}', '{this.email}', '{this.senha}')";
            dbConn Conection = new dbConn();
            SqlCommand command = new SqlCommand(query, Conection.con);
           
            try
            {
                Conection.con.Open();
                command.ExecuteNonQuery();
                Conection.con.Close();
                Conection.con.Dispose();
            }
            catch (SqlException err)
            {
                return $"Erro ao gravar cliente: Numero: {err.Number} Msg: {err}";
            }
            return "Gravado com sucesso";
        }
    }
}
