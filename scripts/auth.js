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
console.log(auth);

//=====================================Listining for auth Status Changes=====================================//

auth.onAuthStateChanged(users => {
    if (users) {
        //if login it view all the things
        // User is signed in.
        const displayName = users.displayName;
        const email = users.email;
        const emailVerified = users.emailVerified;
        const photoURL = users.photoURL;
        const isAnonymous = users.isAnonymous;
        const uid = users.uid;
        const providerData = users.providerData;
        console.log(displayName);
        console.log(email);
        console.log(emailVerified);
        console.log(photoURL);
        console.log(isAnonymous);
        console.log(uid);
        console.log(providerData);

        //================================Database Settings Here===========================================//

        // getting data here
        // using onspanshot here for the realtime listeners
        db.collection("Donors")
            .orderBy("Name")
            .onSnapshot(data => printData(data.docs));
        document.querySelector(".introSection").style.display = "none";
        // document.querySelector('.donarDetailsHere').style.display = 'block';
        document.querySelector("#logOut").style.display = "inline-block";
        document.querySelector("#lgin").style.display = "none";
        document.querySelector("#sngup").style.display = "none";
    } else {
        db.collection("Donors")
            .get()
            .then(data => printData(data.docs));
        document.querySelector(".introSection").style.display = "block";
        // document.querySelector('.donarDetailsHere').style.display = 'none';
        document.querySelector("#logOut").style.display = "none";
        document.querySelector("#lgin").style.display = "inline-block";
        document.querySelector("#sngup").style.display = "inline-block";
    }
});

//=============================================Getting Refrences Here=============================================//
const signupForm = document.querySelector("#signupForm");
const logForm = document.querySelector("#LoginForm");
const lgEmail = document.querySelector("#loginEmail");
const lgPass = document.querySelector("#loginPass");
const sigEmail = document.querySelector("#signupEmail");
const sigPass = document.querySelector("#signupPass");
const signOut = document.querySelector("#logOut");
const donorForm = document.querySelector("#addingDonors");

// =======================================Event Listener for SignUp=======================================//
signupForm.addEventListener("submit", e => {
    // preventing the default behaviour
    e.preventDefault();

    // getting the input values here
    var signEmail = sigEmail.value;
    var signPass = sigPass.value;

    // validating the form here
    if (signEmail === "" || signPass === "") {
        alertMessage2("Please Enter Complete Details..!", "alert-danger");
    } else {
        // creating account in firebase now
        auth
            .createUserWithEmailAndPassword(signEmail, signPass)
            .then(res => {
                alertMessage2("User Registered..!", "alert-success");

                // loading the window
                setTimeout(() => {
                    $("#SignUpModal").modal("toggle");
                    // window.location('/index.html');
                }, 1500);

                // clearing input fields here
                sigEmail.value = "";
                sigPass.value = "";
            })
            .catch(rej => {
                alertMessage2(rej.message, "alert-danger");
                // Handle Errors here.
                const errorCode = rej.code;
                console.log(errorCode);
            });
    }
});

// =======================================Event Listener for SignIn=======================================//
logForm.addEventListener("submit", e => {
    // preventing default behaviour here
    e.preventDefault();

    // getting the input values here
    var logEmail = lgEmail.value;
    var logPass = lgPass.value;

    if (logEmail === "" || logPass === "") {
        alertMessage("Please Complete detials first..!", "alert-danger");
    } else {
        auth
            .signInWithEmailAndPassword(logEmail, logPass)
            .then(res => {
                alertMessage("Donor SignedIn..!", "alert-success");
                setTimeout(() => {
                    $("#LoginModal").modal("toggle");
                    // window.location('/index.html');
                }, 1500);

                // clearing values here
                lgEmail.value = "";
                lgPass.value = "";
            })
            .catch(rej => alertMessage(rej.message, "alert-danger"));
    }
});

// =======================================Event Listener for SignOut=======================================//

signOut.addEventListener("click", e => {
    auth
        .signOut()
        .then(res => alert("Logout Successful..!"))
        .catch(rej => console.log);
    console.log("1");
});

// ================================== Get Current Signed-In User Details========================================//

const data = firebase.auth().currentUser;
if (data) {
    // data is signed in.
    name = data.displayName;
    email = data.email;
    photoUrl = data.photoURL;
    emailVerified = data.emailVerified;
    uid = data.uid;
    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    console.log(name);
    console.log(email);
    console.log(emailVerified);
    console.log(photoURL);
    console.log(uid);
    console.log(providerData);
} else {
    // No user is signed in.
    console.log("No user there");
}

// ================================== Update User Details========================================//

const userUpdate = firebase.auth().currentUser;
userUpdate
    .updateProfile({
        displayName: "Updated User's Name",
        photoURL: "https://example.com/user/profile.jpg"
    })
    .then(function() {
        // Update successful.
        console.log("User Profile Updated Successfully");
    })
    .catch(function(error) {
        // An error happened.
    });

// ================================== Update User Email========================================//

const userEmail = firebase.auth().currentUser;
userEmail
    .updateEmail("user@example.com")
    .then(function() {
        // Update successful.
    })
    .catch(function(error) {
        // An error happened.
    });

// ================================== Send Verification Email========================================//

const sendEmail = firebase.auth().currentUser;
sendEmail
    .sendEmailVerification()
    .then(function() {
        // Email sent.
    })
    .catch(function(error) {
        // An error happened.
    });

// ================================== Update User Password========================================//

const userPassword = firebase.auth().currentUser;
const newPassword = getASecureRandomPassword();
userPassword
    .updatePassword(newPassword)
    .then(function() {
        // Update successful.
    })
    .catch(function(error) {
        // An error happened.
    });

// ================================== Password REset========================================//

const emailAddress = "user@example.com";
auth
    .sendPasswordResetEmail(emailAddress)
    .then(function() {
        // Email sent.
        console.log("Email Sent");
    })
    .catch(function(error) {
        // An error happened.
    });

// ================================== Delete User ========================================//

const userDel = firebase.auth().currentUser;
userDel
    .delete()
    .then(function() {
        // User deleted.
        console.log("User Deleted");
    })
    .catch(function(error) {
        // An error happened.
    });

//====================================================================================================================================================//

// ==================================Adding Donor======================================//
donorForm.addEventListener("submit", e => {
    e.preventDefault();

    // getting the form values here
    let Name = document.querySelector("#name").value;
    let Address = document.querySelector("#add").value;
    let Phone = document.querySelector("#num").value;
    let BloodGroup = document.querySelector("#blood").value;

    if (Name === "" || Address === "" || Phone === "" || BloodGroup === "") {
        // adding the alert here
        const par = document.querySelector("#donorAlert");
        const txt = document.createElement("p");
        txt.textContent = "Enter Complete Details..!";
        txt.className = "text-center alert alert-danger";
        par.appendChild(txt);

        setTimeout(() => {
            document.querySelector(".alert").remove();
        }, 1700);
    } else {
        db.collection("Donors")
            .add({
                Name,
                Address,
                Phone,
                BloodGroup
            })
            .then(() => {
                // adding the alert here
                const par = document.querySelector("#donorAlert");
                const txt = document.createElement("p");
                txt.textContent = "Donar Added..!";
                txt.className = "text-center alert alert-success";
                par.appendChild(txt);

                setTimeout(() => {
                    document.querySelector(".alert").remove();
                    $("#addDonar").modal("toggle");
                }, 1700);

                document.querySelector("#name").value = "";
                document.querySelector("#add").value = "";
                document.querySelector("#num").value = "";
                document.querySelector("#blood").value = "";
            })
            .catch(() => {
                // adding the alert here
                const par = document.querySelector("#donorAlert");
                const txt = document.createElement("p");
                txt.textContent = "Donar Adding Failed..!";
                txt.className = "text-center alert alert-danger";
                par.appendChild(txt);

                setTimeout(() => {
                    document.querySelector(".alert").remove();
                    $("#addDonar").modal("toggle");
                }, 1700);
            });
    }
});

// ==================================Alerting for the Authentication Message======================================//
const alertMessage = (txt, cls) => {
    // getting the parent reference here
    const parent = document.querySelector("#alertMessage");

    // creating para here
    const parag = document.createElement("p");

    // adding class here
    parag.className = `text-center alert ${cls}`;

    // adding text content
    parag.textContent = txt;

    // appending para here
    parent.appendChild(parag);

    // removing the class here
    setTimeout(() => {
        document.querySelector(".alert").remove();
    }, 2500);
};

const alertMessage2 = (txt, cls) => {
    // getting the parent reference here
    const parent = document.querySelector("#alertMessage2");

    // creating para here
    const parag = document.createElement("p");

    // adding class here
    parag.className = `text-center alert ${cls}`;

    // adding text content
    parag.textContent = txt;

    // appending para here
    parent.appendChild(parag);

    // removing the class here
    setTimeout(() => {
        document.querySelector(".alert").remove();
    }, 2500);
};