using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;

namespace Todo_App.Repository
{
    public class dbConn
    {
        public  SqlConnection con;
        public  static string conn { get; set; }
        public  dbConn()
        {
            con = new SqlConnection(conn);
        }
    }
}
