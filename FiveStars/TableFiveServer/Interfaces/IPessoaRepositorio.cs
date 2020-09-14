using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TableFiveServer.Models;

namespace TableFiveServer.Interfaces
{
    interface IPessoaRepositorio
    {
        public interface IPessoaRepositorio
        {
            IEnumerable<Pessoa> GetAll();
            Pessoa Get(int id);
            Pessoa Add(Pessoa item);
            void Remove(int id);
            bool Update(Pessoa item);
        }

        IEnumerable<Pessoa> GetAll();
    }
}
