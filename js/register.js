function register(){

    let user = document.getElementById("user").value;
    let mail = document.getElementById("mail").value;
    let pass = document.getElementById("pass").value;
    let codeCountry = document.getElementById("codeCountry").value;
    alert(user+mail+pass+codeCountry);
    
    var http = new XMLHttpRequest();
    http.open("POST","http://localhost:8080/final_frontend/Register",true);
    http.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    http.send("user=" + user +"&mail=" + mail + "&pass=" + pass + "&codeCountry=" + codeCountry);
    http.onload = function(){
        if(this.readyState== 4 && http.status==200){
            if(http.responseText === "true"){
                alert("Registro completado");
                window.location.href = "/html/index.html";
            }else{
                alert("Registro no competado");
            }
        }
    }
}

function codeCountry(){
    var http = new XMLHttpRequest();
    http.open("GET","http://localhost:8080/final_frontend/Register",true);

    http.onload = function(){
        if(this.readyState== 4 && http.status==200){
            
            let listCountry = JSON.parse(http.response);
            let selectCountry = document.getElementById("codeCountry");
            selectCountry.innerHTML= "";
            
            const keys = Object.keys(listCountry);
            for(let x = 0; x < listCountry.length; x++){
                const option = document.createElement("option");
                option.value = listCountry[x].code;
                var strung = JSON.stringify(listCountry[keys[x]]);
                option.text = strung.substring(1,strung.length-1);
                selectCountry.appendChild(option);
            } 
        }
    }
    http.send();
}
function goLogin(){
    window.location.href = "/html/index.html";
  }

window.onload = function(){
    codeCountry();
    
}