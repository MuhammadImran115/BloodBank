function logOut() {
    firebase.auth().signOut().then(function () {
        localStorage.setItem("userAuth", JSON.stringify({ user: 'null' }))
        window.location = "check.html"
    }).catch(function (error) {
        var errorMessage = error.message;
        swal({
            title: "Internet Error",
            text: errorMessage,
            icon: "warning",
            button: "OK",
        });
    });
}