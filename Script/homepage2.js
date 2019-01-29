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

  var leadsRef = database.ref('Name');
leadsRef.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();

      console.log(childData);
    });
});

  // var ref = database.ref('Name');
  // ref.on('value', gotData, errData);

  // function gotData(data)
  // {
  //     console.log(data.val());
  // }

  // function errData(errData)
  // {
  //   console.log('Error');
  //   console.log(err);
  // }