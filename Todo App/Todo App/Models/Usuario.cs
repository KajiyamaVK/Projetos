﻿using Microsoft.AspNetCore.Authentication;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Todo_App.Models
{
    public class Usuario
    {
        public string idUsuario { get; set; } 
        public string nomeUsuario {get; set;}      
        public string email { get; set; }
        public string senha { get; set; }

        public Usuario()
        {

        }
    }
    
}
