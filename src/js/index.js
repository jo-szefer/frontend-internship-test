/* Here goes your JS code */
const loginForm = document.getElementById("login-form");
const clickMeBtn = document.getElementById("show-popup-form");
const submitBtn = document.getElementById("submitBtn");
const emailAddress = document.getElementById("email");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const successMsg = document.getElementById("successMsg");
const regex = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}/;

function setVisibility(e) {
  e.preventDefault();
  loginForm.classList.toggle("invisible");
  clickMeBtn.classList.toggle("invisible");
}

document
  .getElementById("show-popup-form")
  .addEventListener("click", setVisibility);
document
  .getElementById("close-popup-btn")
  .addEventListener("click", setVisibility);

const formValidation = (e) => {
  e.preventDefault();

  if (emailAddress.value === "") {
    alert("Please enter your e-mail address!");
    emailAddress.focus();
  } else if (password.value === "") {
    alert("Please enter your password!");
    password.focus();
  } else if (!regex.test(emailAddress.value)) {
    alert("Invalid email format");
  } else if (!checkbox.checked) {
    alert("Please accept terms & conditions");
  } else {
    submitForm();
  }
};

submitBtn.addEventListener("click", formValidation);

const submitForm = () => {
  setTimeout(() => {
    loginForm.classList.add("invisible");
    successMsg.classList.remove("invisible");
  }, 3000);
};
