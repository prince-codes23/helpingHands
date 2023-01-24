
document.getElementById("second").style.pointerEvents="none";
document.getElementById("second").style.color="#3d3d3d";
document.getElementById("third").style.pointerEvents="none";
document.getElementById("third").style.color="#3d3d3d";
document.getElementById("forth").style.pointerEvents="none";
document.getElementById("forth").style.color="#3d3d3d";

// document.getElementById("form-display").style.display="none";
document.getElementById("loginform").addEventListener("submit", (event) => {
    event.preventDefault()
})

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        var uid = user.email;
        location.replace(`/index2/${uid}`)
    } else {
        // User is signed out
    }
});

function login() {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
        .catch((error) => {
            document.getElementById("error").innerHTML = error.message
        })
}

function SignUp() {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch((error) => {
            document.getElementById("error").innerHTML = error.message
        });
}

function forgotpass() {
    const email = document.getElementById("email").value
    firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            alert("Reset link sent to your email id")
        })
        .catch((error) => {
            document.getElementById("error").innerHTML = error.message
        });
}