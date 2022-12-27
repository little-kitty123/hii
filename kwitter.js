function addUser(){
    username=document.getElementById("user_name").value;
    loacalStorage.setItem("user_name", username);
    window.location="kwitter_room.html";
}