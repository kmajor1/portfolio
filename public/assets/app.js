// call auth 
var userAuth = firebase.auth(); 
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
