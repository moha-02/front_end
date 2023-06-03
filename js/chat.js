function sendSms(){
    let mail = sessionStorage.getItem("mail");
    let session = sessionStorage.getItem("session");
    let receptor = document.getElementById("receptor").value;
    let sms = document.getElementById("sms").value;

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

    var http = new XMLHttpRequest();
    http.open("GET","http://localhost:8080/final_frontend/Xat?mail=" + mail + "&session="+ session,true);
    
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