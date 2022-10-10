var firebaseConfig = {
      apiKey: "AIzaSyCn8Ss93Vw6lqt2XNIvsRQ9zGr3fDZdmIw",
      authDomain: "lets-chat-ad0cc.firebaseapp.com",
      databaseURL: "https://lets-chat-ad0cc-default-rtdb.firebaseio.com",
      projectId: "lets-chat-ad0cc",
      storageBucket: "lets-chat-ad0cc.appspot.com",
      messagingSenderId: "706389280316",
      appId: "1:706389280316:web:f09d60b2b696f6127c2539"
    };
    
    // Initialize Firebase
       firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
     //End code
     });});}
getData();

function addRoom()
{
     room_name = document.getElementById("room_name").value;

     firebase.database().ref("/").child(room_name).update({
           purpose : "adding room name"
     });

     localStorage.setItem("room_name", room_name);

     window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
     console.log(name);
     localStorage.setItem("room_name", name);
     window.location = "kwitter_page.html";
}

function logout() {
     localStorage.removeItem("user_name");
     localStorage.removeItem("room_name");
     window.location = "index.html";
}


