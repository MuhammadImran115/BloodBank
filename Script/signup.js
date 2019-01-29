
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBXe1-Lu-6IXcrZWrUPIKrZYOnIQUnkpt8",
    authDomain: "blooodbank-v2.firebaseapp.com",
    databaseURL: "https://blooodbank-v2.firebaseio.com",
    projectId: "blooodbank-v2",
    storageBucket: "blooodbank-v2.appspot.com",
    messagingSenderId: "825866262939"
  };
  firebase.initializeApp(config);
  let signUpBtn = document.getElementById("signup");

  signUpBtn.addEventListener('click',() => {
    
    let Name = document.getElementById("name").value;
    let Email = document.getElementById("email").value;
    let Password = document.getElementById("password").value;
    let City = document.getElementById("city").value;
    let UserType = document.getElementById("dropdown").value;

    firebase.auth()
        .createUserWithEmailAndPassword(Email,Password)
        .then((success)=> {
            let userObj = {
                Name,
                Email,
                City,
                UserType
            }
             
            var database = firebase.database();
            if (UserType=="donar")
            {
                let userUid = firebase.auth().currentUser.uid;
                database.ref('/Donar/')
                .push(userObj)
                .then(() => {
                    window.location = 'mainpage.html'
                })
            }
            else
            {
                if(UserType=="acceptor")
                {
                    let userUid = firebase.auth().currentUser.uid;
                    database.ref('/Acceptor/')
                    .push(userObj)
                    .then(() => { 
                        window.location = 'mainpage.html'
                    })
                }
            } 
        })
  })