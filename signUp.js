//Login Fields
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit");

//Create Account
const SignupEmailIn = document.getElementById("emaili-signup");
const confirmSignupEmailIn = document.getElementById("confirm-emaili-signup");
const signupPasswordIn = document.getElementById("password-signup");
const confirmSignupPasswordIn = document.getElementById("confirm-password-signup");
const createacctbtn = document.getElementById("create-acct-btn");

const main = document.getElementById("main");
const createacct = document.getElementById("create-acct");

const signupButton = document.getElementById("sign-up");
const returnBtn= document.getElementById("return-btn");
   
signupButton.addEventListener("click", function () {
    main.style.display = "none";
    createacct.style.display = "block";
});
    returnBtn.addEventListener("click", function () {
        main.style.display = "block";
        createacct.style.display = "none";
        
} );
