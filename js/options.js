function goFrieND(){
    window.location.href = "C:\Users\mohammed\Documents\front_end\html\listFriends.html";
}

function goAmigos(){
    window.location.href = "C:\Users\mohammed\Documents\front_end\html\listFriends.html";
}

function goXat(){
    window.location.href = "C:\Users\mohammed\Documents\front_end\html\chat.html";
}

function logOut(){
    sessionStorage.removeItem('session');
    sessionStorage.removeItem('mail');
    window.location.href = "C:\Users\mohammed\Documents\front_end\html\index.html";
}