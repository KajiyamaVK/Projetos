using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TableFiveServer.Models;
using TableFiveServer.Interfaces;

namespace TableFiveServer.Repository
{
    public class PessoaRepositorio:IPessoaRepositorio
    {
        private List<Pessoa> Pessoa = new List<Pessoa>();
        private int _nextId = 1;

        public PessoaRepositorio()
        {
            Add(new Pessoa("Amélia","Silva" ));
            
        }

        public Pessoa Add(Pessoa item)
        {
            if (item == null)
            {
                throw new ArgumentNullException("item");
            }
            item.Id = _nextId++;
            Pessoa.Add(item);
            return item;
        }

        public Pessoa Get(int id)
        {
            return Pessoa.Find(p => p.Id == id);
        }

        public IEnumerable<Pessoa> GetAll()
        {
            return Pessoa;
        }

        public void Remove(int id)
        {
            Pessoa.RemoveAll(p => p.Id == id);
        }

        public bool Update(Pessoa item)
        {
            if (item == null)
            {
                throw new ArgumentNullException("item");
            }

            int index = Pessoa.FindIndex(p => p.Id == item.Id);

            if (index == -1)
            {
                return false;
            }
            Pessoa.RemoveAt(index);
            Pessoa.Add(item);
            return true;
        }
    }
}
