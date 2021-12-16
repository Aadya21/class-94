var firebaseConfig = {
    apiKey: "AIzaSyDelSeJ309LCJ8JSH-C1MsCqqL--o6J2I0",
    authDomain: "kwitter-b872d.firebaseapp.com",
    databaseURL: "https://kwitter-b872d-default-rtdb.firebaseio.com",
    projectId: "kwitter-b872d",
    storageBucket: "kwitter-b872d.appspot.com",
    messagingSenderId: "317763650466",
    appId: "1:317763650466:web:341c336395065f7bd7e8fb",
    measurementId: "G-7DCLC1RCPG"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);



function AddUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
}