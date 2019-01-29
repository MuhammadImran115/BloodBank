var config = {
    apiKey: "AIzaSyBXe1-Lu-6IXcrZWrUPIKrZYOnIQUnkpt8",
    authDomain: "blooodbank-v2.firebaseapp.com",
    databaseURL: "https://blooodbank-v2.firebaseio.com",
    projectId: "blooodbank-v2",
    storageBucket: "blooodbank-v2.appspot.com",
    messagingSenderId: "825866262939"
  };
  
  firebase.initializeApp(config);    

  var database = firebase.database();

  let DonarId = document.getElementById("Donar");

 DonarId.addEventListener('click',() => {
    database.ref('Donar').once('value', function(snapshot) {
      if (snapshot.exists()) {
        var content = '';
        snapshot.forEach(function(data) {
          var val = data.val();
            content += '<tr>';
            content += '<td>' + val.Name + '</td>';
            content += '<td>' + val.City + '</td>';
            content += '<td>' + val.UserType + '</td>';
            content += '</tr>';
        });
        $('#tabledonar').append(content);
      }
    });
})  

let AcceptorId = document.getElementById("Acceptor");

AcceptorId.addEventListener('click',() => {

  database.ref('Acceptor').on('value', function(snapshot) {
    if (snapshot.exists()) {
      var content = '';
      snapshot.forEach(function(data) {
        var val = data.val();
          content += '<tr>';
          content += '<td>' + val.Name + '</td>';
          content += '<td>' + val.City + '</td>';
          content += '<td>' + val.UserType + '</td>';
          content += '</tr>';
      });
      $('#tableacceptor').append(content);
    }
  });
}) 


// var divElement = function(){
//   divCode = document.getElementById("activeuser").innerHTML;
//   return divCode; };

//   document.getElementById('activeuser').value = divElement(); 

//   function GetDivElement() {
//     return divElement();
//   }