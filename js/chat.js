//FUNCION QUE PREMITE ENVIAR SMS
function sendSms(){
    let mail = sessionStorage.getItem("mail");
    let session = sessionStorage.getItem("session");
    let receptor = document.getElementById("receptor").value;
    let sms = document.getElementById("sms").value;
    
    //DESPUES DE 
    var http = new XMLHttpRequest();
    http.open("POST","http://localhost:8080/final_frontend/Xat",true);
    http.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    http.send("mail=" + mail +"&session=" + session + "&receptor=" + receptor + "&sms="+ sms);
    http.onload = function(){

        if(this.readyState== 4 && http.status==200){
            
        }       
    }
}

//FUNCION QUE PERMITE RECIBIR LOS SMS Y MOSTRARLOS EN EL CHAT CADA 50 MS SE REFRESCA
function getSms(){

    let mail = sessionStorage.getItem("mail");
    let session = sessionStorage.getItem("session");
    

    var http = new XMLHttpRequest();
    http.open("GET","http://localhost:8080/final_frontend/Xat?mail=" + mail + "&session="+ session,true);
    
    http.onload = function(){
        if(this.readyState== 4 && http.status==200){
            let message = JSON.parse(http.response);
            alert("tienes un nuevo mensage");
            let listFriends = JSON.parse(http.response);
            let tab = document.getElementById("tab");
            tab.innerHTML= "";

            const option = document.createElement("li");
            option.textContent = JSON.stringify(message["text"]);
            tab.appendChild(option);
        }
    }
    http.send();
}
//VUELVE A LAS OPCIONES
function goOptions(){
    window.location.href = "file:///C:/Users/mohammed/Documents/front_end/html/options.html";
}
//ARRANCA LA FUNCION SIN NECESIDAD DE LLAMARLA
window.onload = function(){
    setInterval(getSms(),50) 
    
}