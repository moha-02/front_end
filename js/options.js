//FUNCIONES PARA MOVERSE A LAS DIFERENTE SPAGINAS ADEMAS DE LOGOUT
function goFrieND(){
    window.location.href = "file:///C:/Users/mohammed/Documents/front_end/html/addFriend.html";
}

function goAmigos(){
    window.location.href = "file:///C:/Users/mohammed/Documents/front_end/html/listFriends.html";
}

function goXat(){
    window.location.href = "file:///C:/Users/mohammed/Documents/front_end/html/chat.html";
}

function logOut(){
    sessionStorage.clear(0);
    window.location.href = "file:///C:/Users/mohammed/Documents/front_end/html/index.html";
}