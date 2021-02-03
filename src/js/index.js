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
