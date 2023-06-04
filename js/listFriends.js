//FUNCION QUE RECIBI LA RESPUESTA Y LUEGO LA CONVIERTE EN JSON Y MEDIANTE UN BUCLE FOR RECORRE EL JSON
function listFriends(){
    let mail = sessionStorage.getItem("mail");
    let session = sessionStorage.getItem("session");

    var http = new XMLHttpRequest();
    http.open("GET","http://localhost:8080/final_frontend/Friend?mail=" + mail + "&session="+ session,true);
    
    http.onreadystatechange = function(){
        if(this.readyState== 4 && http.status==200){
            let listFriends = JSON.parse(http.response);
            let tab = document.getElementById("tab");
            tab.innerHTML= "";
            
            const keys = Object.keys(listFriends);
            for(let x = 0; x < listFriends.length; x++){
                const option = document.createElement("li");
                option.textContent = JSON.stringify(listFriends[keys[x]]);
                tab.appendChild(option);
                
            }
            
        }
    }
    http.send();

}
//VOLVER A OPCIONES
function goOptions(){
    window.location.href = "file:///C:/Users/mohammed/Documents/front_end/html/options.html";
}