const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const signUpButton = document.getElementById("sign-up");
const emailErrorDiv = document.getElementById("email-error-div");
const passwordErrorDiv = document.getElementById("password-error-div");
const confirmPasswordErrorDiv = document.getElementById(
  "confirmpass-error-div"
);

var mailformat =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

signUpButton.addEventListener("click", (e) => {
  e.preventDefault();
  formValidation();
});

const formValidation = () => {
  if (email.value === "") {
    email.classList.add("error");
    emailErrorDiv.innerHTML = "Field Empty";
  } else if (password.value === "") {
    password.classList.add("error");
    passwordErrorDiv.innerHTML = "Field Empty";
  } else if (confirmPassword.value === "") {
    confirmPassword.classList.add("error");
    confirmPasswordErrorDiv.innerHTML = "Field Empty";
  } else if (password.value.length < 6) {
    password.classList.add("error");
    passwordErrorDiv.innerHTML = "Length of password should be greater than 6";
  } else if (password.value !== confirmPassword.value) {
    confirmPassword.classList.add("error");
    confirmPasswordErrorDiv.innerHTML =
      "Password and confirm password should be same";
  } else if (!email.value.match(mailformat)) {
    email.classList.add("error");
    emailErrorDiv.innerHTML = "Enter a proper email";
  } else {
    localStorage.setItem("email", email.value);
    window.location.replace("/");
  }
};
