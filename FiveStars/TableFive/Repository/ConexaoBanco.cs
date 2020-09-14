using System;
using System.Collections.Generic;
using System.Text;
using MySql.Data.MySqlClient;

namespace TableFive.Repository
{
    public class ConexaoBanco
    {
        public MySqlConnection con;

        public ConexaoBanco()
        {
            con = new MySqlConnection("Server=localhost;Database=tablefive; Uid=root; Pwd=P@ss2020!;");
        }
        
    }
}
