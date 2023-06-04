//EN EL  LOGIN Y REGISTER HAY QUE INTRODUCIR 2 VECES LOS MISMOS DATOS(TE LO MOSTRÉ EN CLASE),ES UN BUGG
//QUE NO ENCUENTRO LA SOLUCION// POR LO QUE INVESTIGADO PPUEDE SER DEBIDO A LA SEGURIDAD DEL CORS
//POR LO DEMAS TODO FUNCIONA CON NORMALIDAD, 

function enviar(){
  let mail = document.getElementById("mail").value;
  let pass = document.getElementById("pass").value;

  var http = new XMLHttpRequest();
  http.open("GET","http://localhost:8080/final_frontend/Login?mail=" + mail + "&pass="+ pass,true);

  http.onreadystatechange = function(){

    if(this.readyState=== 4 && http.status===200){
      var session =http.responseText;
      alert(session);
      if(session !== "false"){
        sessionStorage.setItem("session",session);
        sessionStorage.setItem("mail",mail);
        window.location.href = "file:///C:/Users/mohammed/Documents/front_end/html/options.html";
      } else{
        alert("Sesion interrumpida.Vuelva a intentarlo.")
      }
    }
  }
  http.send();
}


function goRegister(){
  window.location.href = "file:///C:/Users/mohammed/Documents/front_end/html/register.html";
}