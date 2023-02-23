import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDg3yzdAg3aj45zwH-zDMLa-vmRTx619aE",
    authDomain: "mauifirebasechat.firebaseapp.com",
    databaseURL: "https://mauifirebasechat-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "mauifirebasechat",
    storageBucket: "mauifirebasechat.appspot.com",
    messagingSenderId: "1069015072243",
    appId: "1:1069015072243:web:1e9889348885fd5e3f2686"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

register.addEventListener('click', (e) => {

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var cpassword = document.getElementById('cpassword').value;

    var lowercase = /[a-z]/g;
    var uppercase = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if (username.length == 0) {
        alert("Please enter username")
    }
    else if (email.length == 0) {
        alert("Please enter email id")
    }
    else if (password.length == 0) {
        alert("Please enter password")
    }
    else if (!password.match(numbers)) {
        alert("please add 1 number")
    }
    else if (!password.match(lowercase)) {
        alert("please add 1 lowercase letter")
    }
    else if (!password.match(uppercase)) {
        alert("please add 1 uppercase letter")
    }
    else if (password === cpassword) {
        let login2 = document.querySelector('.login2');
        let container = document.querySelector('.container');

        login2.onclick = function () {
            container.classList.add('signinForm');
            alert('user created');

            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    set(ref(database, 'users/' + user.uid), {
                        username: username,
                        email: email
                    })
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage);
                });
        }
    }
    else {
        alert('password and confirm password does not match')
    }
});

login1.addEventListener('click', (e) => {
    var email1 = document.getElementById('email1').value;
    var password1 = document.getElementById('password1').value;

    signInWithEmailAndPassword(auth, email1, password1)
        .then((userCredential) => {
            const user = userCredential.user;
            const dt = new Date();
            update(ref(database, 'users/' + user.uid), {
                last_login: dt,
            })
            alert('LogIn Successfully');
            window.location.href = "welcome.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
});