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

           
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
  firebase_message_id = childKey;
  message_data = childData;
//Start code

//End code
} });  }); }
getData();

function send()
{
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
     name:user_name,
     message:msg,
     like:0
});

document.getElementById("msg").value = "";
}