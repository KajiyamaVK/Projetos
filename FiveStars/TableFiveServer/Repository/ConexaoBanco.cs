using System;
using System.Collections.Generic;
using System.Text;
using MySql.Data.MySqlClient;

namespace TableFiveServer.Repository
{
    public class ConexaoBanco
    {
        public MySqlConnection con;
        public static string ConnString { get; set; }
        public ConexaoBanco()
        {
            con = new MySqlConnection(ConnString);
        }
        
    }
}
