const formButton = document.getElementById("form-button");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const male = document.getElementById("male");
const female = document.getElementById("female");
const course = document.getElementById("course");
const message = document.getElementById("message");
const check = document.getElementById("check");
const firstNameErrorDiv = document.getElementById("firstName-error-div");
const lastNameErrorDiv = document.getElementById("lastName-error-div");
const genderErrorDiv = document.getElementById("gender-error-div");
const courseErrorDiv = document.getElementById("course-error-div");
const messageErrorDiv = document.getElementById("message-error-div");
const checkErrorDiv = document.getElementById("check-error-div");

formButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (firstName.value === "") {
    firstName.classList.add("error");
    firstNameErrorDiv.innerText = "Enter your first Name";
  } else if (firstName.value.length < 3) {
    firstName.classList.add("error");
    firstNameErrorDiv.innerText = "First Name is too short";
  }

  if (lastName.value === "") {
    lastName.classList.add("error");
    lastNameErrorDiv.innerText = "Enter your last Name";
  } else if (lastName.value.length < 3) {
    lastName.classList.add("error");
    lastNameErrorDiv.innerText = "Last Name is too short";
  }

  if (male.checked === false && female.checked === false) {
    genderErrorDiv.innerText = "Select your gender";
  }

  if (message.value === "") {
    message.classList.add("error");
    messageErrorDiv.innerText = "Enter your message";
  }

  if (course.value === "") {
    course.classList.add("error");
    courseErrorDiv.innerText = "Select the course";
  }

  if (check.checked === false) {
    checkErrorDiv.innerText = "Please check this above box";
  }
});
