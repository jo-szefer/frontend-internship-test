/* Here goes your JS code */
document
  .getElementById("show-popup-form")
  .addEventListener("click", setVisibility);
document
  .getElementById("close-popup-btn")
  .addEventListener("click", setVisibility);

function setVisibility(e) {
  e.preventDefault();
  const loginForm = document.getElementById("login-form");
  loginForm.classList.toggle("invisible");
  const clickMeBtn = document.getElementById("show-popup-form");
  clickMeBtn.classList.toggle("invisible");
}
const submitBtn = document.getElementById("submitBtn");

const formValidation = (e) => {
  e.preventDefault();

  let isCorrect = false;
  const emailAddress = document.getElementById("email");
  const password = document.getElementById("password");
  const checkbox = document.getElementById("checkbox");
  const regex = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}/;

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
  } else isCorrect = true;

  return isCorrect;
};
submitBtn.addEventListener("click", formValidation);
