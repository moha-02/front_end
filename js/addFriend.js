function addFriend(){
    let mail = sessionStorage.getItem("mail");
    let session = sessionStorage.getItem("session");
    let friend = document.getElementById("friend").value;

    //DESPUES DE RECIBIR LOS PARAMETROS ESTABLEZCO LA CONEXION CON EL SERVLET
    var http = new XMLHttpRequest();
    http.open("POST","http://localhost:8080/final_frontend/Friend",true);
    http.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    http.send("mail=" + mail +"&session=" + session + "&friend=" + friend);
    http.onload = function(){

        //SEGUN LA RESPUESTA DEL SERVLEST SE EJECUTA UN ALERT U OTRO
        if(this.readyState== 4 && http.status==200){
            var response = http.responseText;
            alert(response);

            if(response === "1"){
                alert("Amic afegit correctament");
            }else if(response === "2"){
                alert("Amic no trobat");
            }else if(response === "3"){
                alert("El codi de sessio ha expirat i es requereix login novament");
            }else{
                alert("El servidor no respon");
            }
        }       
    }

}

function goOptions(){
    window.location.href = "file:///C:/Users/mohammed/Documents/front_end/html/options.html";
}