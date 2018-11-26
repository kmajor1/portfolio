// call auth 
var userAuth = firebase.auth();
// use auth 
userAuth.signInAnonymously().catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
});

userAuth.onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        // ...
    } else {
        // User is signed out.
        // ...
    }
    // ...
});
// call firebase rt db
var db = firebase.database();
var contactRef = db.ref();
// add onsubmit handler 
var contactForm = document.getElementById('formContactMe');
contactForm.onsubmit = function (event) {
    var formData = new FormData(contactForm);
    // call firebase
    contactRef.push({
        name: formData.get('inputName'),
        email: formData.get('inputEmail'),
        comments: formData.get('inputComments')
    })
}

// change linked in images for smaller screens 
