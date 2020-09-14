//import apiUrl from '../../globals'
// import { Component } from 'react';
const apiUrl = "https://localhost:44312/"
const { default: Axios } = require("axios");




/*******************************************************************
 * ********************INICIO**************************************
 * Aqui é efetuada a busca de todos os valores dentro dos inputs.   
 * É importante ressaltar que o tratamento de valores nulos devem ser
 * feitos aqui. Não na retaguarda. 
 * ****************************************************************/
function ColetarDados(){
    const Campos = document.getElementsByTagName("input");
    var obj = {}
    for(var item of Campos){
        obj[item.id] = item.value===""?"null":item.value
    }
    
    return obj
    
}
/******************************* FIM *************************** */


/*******************************************************************
 * ********************INICIO**************************************
 * Aqui é efetuada a busca de todos os valores dentro dos inputs.   
 * É importante ressaltar que o tratamento de valores nulos devem ser
 * feitos aqui. Não na retaguarda. 
 * ****************************************************************/

function DisableFields(){
    const Campos = document.getElementsByTagName("input");
    for (var item of Campos){
        item.disabled=true;
    }
}

export function ClearFields(){
    const Campos = document.getElementsByTagName("input");
    for(var item of Campos){
        item.disabled = false;
        item.value=""
    }
}

function Aviso(message,color){
    const divAvisos = document.getElementById("cc-avisos");
    divAvisos.innerHTML = message
    divAvisos.style.border=`1px solid ${color}`
    divAvisos.style.padding = "10px"
}

/******************************* FIM *************************** */


export function ColetarClientes(){
    const  Clientes= ColetarDados();
    let UrlBuscar = "?"
    let contador = 0

    for(var item in Object.keys(Clientes)){
        UrlBuscar +=`${item}=${Object.keys(Clientes)[contador]}&`
        contador++
    }

    Axios.get(`${apiUrl}/Clientes${UrlBuscar}`)
        .then(function(response){
            console.log(response.data)
            // Clientes = response.data
            // console.log("Lista de clientes",Clientes[0].Name)
        })
        .catch(function(error){
            console.log(error)
        })
}



export function GravarCliente (){

    if (document.getElementById("cpf").value===""){
   
        Aviso("O campo CPF é obrigatório. Utilizamos tal informação para verificar se o cadastro deste cliente já não consta em nossos cadastros. ","red")
        return 0;
    }
    const  Clientes= ColetarDados();
    
    Axios.post(`${apiUrl}clientes/gravar`,Clientes,{headers:{}})
        .then((response)=>{
            console.log(response)
            debugger
            Aviso("Cliente gravado com sucesso","green")
            DisableFields()
        })
        .catch(function(error){
            alert(error)
        })
      

}