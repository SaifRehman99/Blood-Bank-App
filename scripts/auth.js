//=============================================Firebase Setting Here=============================================//

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCjFXqLQASDq_nhe-mcpI40iJXJS-7wb-I",
    authDomain: "blood-bank-abbf8.firebaseapp.com",
    databaseURL: "https://blood-bank-abbf8.firebaseio.com",
    projectId: "blood-bank-abbf8",
    storageBucket: "blood-bank-abbf8.appspot.com",
    messagingSenderId: "224018960477",
    appId: "1:224018960477:web:4462e92104505d02"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//getting the firebase firestore services
const db = firebase.firestore();

//getting the firebase auth services
const auth = firebase.auth();



//=============================================Getting Refrences Here=============================================//
const signupForm = document.querySelector('#signupForm');
const logForm = document.querySelector('#LoginForm');
const lgEmail = document.querySelector('#loginEmail');
const lgPass = document.querySelector('#loginPass');
const sigEmail = document.querySelector('#signupEmail');
const sigPass = document.querySelector('#signupPass');
const donarRes = document.querySelector('#results');



// =======================================Event Listener for SignUp=======================================//
signupForm.addEventListener('submit', (e) => {

    // preventing the default behaviour
    e.preventDefault();


    // getting the input values here
    var signEmail = sigEmail.value;
    var signPass = sigPass.value;

    // validating the form here
    if (signEmail === '' || signPass === '') {
        alertMessage('Please Enter Complete Details..!', 'alert-danger');
    }
    else {



        // creating account in firebase now
        auth.createUserWithEmailAndPassword(signEmail, signPass)
            .then(res => {
                alertMessage('User Registered..!', 'alert-success')

                // loading the window
                setTimeout(() => {
                    location.assign('index.html');
                }, 3000);
            })
            .catch(rej => alertMessage(rej.message, 'alert-danger'));

    }

})






// =======================================Event Listener for SignIn=======================================//
logForm.addEventListener('submit', (e) => {

    // preventing default behaviour here
    e.preventDefault();

    // getting the input values here
    var logEmail = lgEmail.value;
    var logPass = lgPass.value;

    if (logEmail === '' || logPass === '') {
        alertMessage('Please Complete detials first..!','alert-danger');
    }
    else {
        auth.signInWithEmailAndPassword(logEmail, logPass)
            .then(res => alertMessage('Donor SignedIn..!', 'alert-success'))
            .catch(rej => alertMessage(rej.message, 'alert-danger'))


    }
})




// =======================================Event Listener for SignOut=======================================//



// ==================================Alerting for the Authentication Message======================================//
const alertMessage = (txt, cls) => {

    // getting the parent reference here
    const parent = document.querySelector('#alertMessage');

    // creating para here
    const parag = document.createElement('p');

    // adding class here
    parag.className = `text-center alert ${cls}`;

    // adding text content
    parag.textContent = txt;

    // appending para here
    parent.appendChild(parag);


    // removing the class here
    setTimeout(() => {
        document.querySelector('.alert').remove()
    }, 2500);
}