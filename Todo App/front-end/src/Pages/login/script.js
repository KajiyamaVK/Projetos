
// import apiUrl from '../../globals'
const apiUrl = "https://localhost:44312/"
const { default: Axios } = require("axios");


export function registerMode(){
    const accessButton = document.getElementById("AccessButton")
    const registerButton = document.getElementById("RegisterButton")

    if(accessButton.innerHTML!=="Gravar")
    {
        accessButton.innerHTML = "Gravar"
        registerButton.innerHTML = "Voltar ao Login"
        
    } else if (accessButton.innerHTML==="Gravar")
    {
        accessButton.innerHTML = "Acessar"
        registerButton.innerHTML = "Registre-se"
        
    }
    
    
}

function ColetarDados(){
    const Campos = document.getElementsByTagName("input");
    var obj = {}
    for(var item of Campos){
        obj[item.id] = item.value===""?"null":item.value
    }
    
    return obj
    
}

export function ClearFields(){
    const Campos = document.getElementsByTagName("input");
    for(var item of Campos){
        item.disabled = false;
        item.value=""
    }
}


export function userAuth(){
    debugger
    const User= ColetarDados();
    let UrlBuscar1 = "?"
    let UrlBuscar2 = ""
    

    for(var item in Object.keys(User)){
        UrlBuscar1 +=`${Object.keys(User)[item]}=${Object.values(User)[item]}&`
        
    }
    UrlBuscar2 = UrlBuscar1.substring(0,UrlBuscar1.length -1)
    
    Axios.get(`${apiUrl}users/auth${UrlBuscar2}`)
        .then(function(response){
            debugger
            if(response.data === true){
                localStorage.setItem('isAuthenticated','1')
                
            }else{
                alert("Usuário não encontrado. Por favor verifique se digitou corretamente ou clique em 'Registrar'")
            }


        })
        .catch(function(error){
            console.log(`Erro: ${error}`)
        })
        
}
