function sendSms(){
    let mail = sessionStorage.getItem("mail");
    let session = sessionStorage.getItem("session");
    let receptor = document.getElementById("receptor").value;
    let sms = document.getElementById("sms").value;
    
    alert(mail);
    alert(session);
    alert(receptor)
    alert(sms)

    var http = new XMLHttpRequest();
    http.open("POST","http://localhost:8080/final_frontend/Xat",true);
    http.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    http.send("mail=" + mail +"&session=" + session + "&receptor=" + receptor + "&sms="+ sms);
    http.onload = function(){

        if(this.readyState== 4 && http.status==200){
            
        }       
    }
}

function getSms(){

    let mail = sessionStorage.getItem("mail");
    let session = sessionStorage.getItem("session");
    alert(mail);
    alert(session);

    var http = new XMLHttpRequest();
    http.open("GET","http://localhost:8080/final_frontend/Xat?mail=" + mail + "&session="+ session,true);
    alert(http.response);
    console.log(http.response);
    http.onreadystatechange = function(){
        if(this.readyState== 4 && http.status==200){
            let message = JSON.parse(http.response);
            let listFriends = JSON.parse(http.response);
            let tab = document.getElementById("tab");
            tab.innerHTML= "";

            const option = document.createElement("li");
            option.textContent = JSON.stringify(message["text"]);
            tab.appendChild(option);
        }
    }
    http.send();
    console.log(http.response);
    alert(http.response);
}
function goOptions(){
    window.location.href = "file:///C:/Users/mohammed/Documents/front_end/html/options.html";
}

window.onload = function(){
    setInterval(getSms(),5000) 
    
}