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




//=============================================Getting Refrences Here=============================================//
const logEmail = document.querySelector('#loginEmail');
const logPass = document.querySelector('#loginPass');
const sigEmail = document.querySelector('#signupEmail');
const sigPass = document.querySelector('#signupPass');
const donarRes = document.querySelector('#results');