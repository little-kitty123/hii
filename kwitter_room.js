function addRoom(){
    roomname=document.getElementById("room_name").value;
    loacalStorage.setItem("room_name", roomname);
    window.location="kwitter_page.html";
}