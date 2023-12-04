// Your web app's Firebase configuration
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js'


const firebaseConfig = {
  apiKey: "AIzaSyCvZjmoUgxqaiTKZPERWI3NKUfhjmHcI4Q",
  authDomain: "my-first-pet-project-b2acc.firebaseapp.com",
  projectId: "my-first-pet-project-b2acc",
  storageBucket: "my-first-pet-project-b2acc.appspot.com",
  messagingSenderId: "107250299843",
  appId: "1:107250299843:web:c80f20f0b9bca05d1d8376",
  databaseURL: "https://my-first-pet-project-b2acc-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


// Get all the input fields
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit");
const switchToRegister = document.getElementById("switchToRegister");
const title = document.getElementById("title");
const rememberForgot = document.getElementById("remember-forgot");
const text = document.getElementById("text");


submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  loginUser(emailInput.value, passwordInput.value);

}); 

function registerUser(email, password) {

  // Move on with Auth
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
        
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  
}

function loginUser (email, password) {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user + " is logged in");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

  
}

switchToRegister.onclick = function() {
  title.innerHTML = "Create Account";
  submitButton.innerText = "Sign Up";
  rememberForgot.style.visibility = "hidden";
  text.innerHTML = '<p>Already have an account? <a href="index.html">Login</a></p>';
  submitButton.removeEventListener("click", () => {
    loginUser(emailInput.value, passwordInput.value);
  });
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    registerUser(emailInput.value, passwordInput.value);
  
  }); 
}