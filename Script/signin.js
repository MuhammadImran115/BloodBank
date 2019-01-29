var config = {
    apiKey: "AIzaSyBXe1-Lu-6IXcrZWrUPIKrZYOnIQUnkpt8",
    authDomain: "blooodbank-v2.firebaseapp.com",
    databaseURL: "https://blooodbank-v2.firebaseio.com",
    projectId: "blooodbank-v2",
    storageBucket: "blooodbank-v2.appspot.com",
    messagingSenderId: "825866262939"
  };
firebase.initializeApp(config);   

let signInBtn = document.getElementById("signin");

signInBtn.addEventListener('click',() => {

var email = document.getElementById("email").value;

var password = document.getElementById("password").value;

firebase.auth().signInWithEmailAndPassword(email, password)
    .then((success) => {
        localStorage.setItem("userAuth", JSON.stringify(success))
        window.location = 'homepage.html'
    })
  })
