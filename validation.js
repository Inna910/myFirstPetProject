const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const passwordHint = document.getElementById("password-hint");
const hintLengthCheckbox = document.getElementById("hint-length");
const hintSpecialSymbolCheckbox = document.getElementById("hint-symbol");
const hintNumberCheckbox = document.getElementById("hint-number");
const hintUppercaseLetter = document.getElementById("hint-uppercase");
const submitButton = document.getElementById("submit");

emailInput.onblur = (e) => {
  e.preventDefault();
  if (emailInput.value === "") {
    emailInput.classList.add("shake");
    emailError.style.visibility = "visible";
    submitButton.classList.add("disabled-btn");
  }
};

emailInput.onfocus = () => {
  emailInput.classList.remove("shake");
  emailError.style.visibility = "hidden";
  };

emailInput.onkeyup = () => {
  let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailInput.value.match(pattern)) {
    emailInput.classList.add("shake");
    emailError.style.visibility = "visible";
    emailError.innerHTML = "Please enter a valid email";
    submitButton.classList.add("disabled-btn");
  } else {
    emailInput.classList.remove("shake");
    emailError.style.visibility = "hidden";
    submitButton.classList.remove("disabled-btn");
  }
};

passwordInput.onblur = (e) => {
  e.preventDefault();
  if (passwordInput.value === "") {
    passwordInput.classList.add("shake");
    passwordError.style.visibility = "visible";
    submitButton.classList.add("disabled-btn");
  }
  passwordHint.style.display = "none";
};

passwordInput.onfocus = () => {
  passwordInput.classList.remove("shake");
  passwordError.style.visibility = "hidden";

  passwordHint.style.display = "block";
}


function checkPasswordLength() {
  hintLengthCheckbox.checked = passwordInput.value.length >= 8;
}

function checkPasswordHasSpesialSymbol() {
  const specialCharacterPattern = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
  hintSpecialSymbolCheckbox.checked = passwordInput.value.match(specialCharacterPattern);
}

function checkPasswordHasNumber() {
  const numberPattern = /\d/;
  hintNumberCheckbox.checked = passwordInput.value.match(numberPattern);
}

function checkPasswordHasUppercaseLetter() {
  const uppercasePattern = /[A-Z]/;
  hintUppercaseLetter.checked = passwordInput.value.match(uppercasePattern);
}
