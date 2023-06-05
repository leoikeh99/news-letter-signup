const emailInput = document.getElementById("emailInput");
const emailErrorLabel = document.getElementById("emailErrorLabel");

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

function showError(errorMessage) {
  if (!emailInput.classList.contains("card__formInput--error"))
    emailInput.classList.add("card__formInput--error");
  if (emailErrorLabel.classList.contains("hide"))
    emailErrorLabel.classList.remove("hide");
  emailErrorLabel.innerText = errorMessage;
}

function showFinalCard() {
  document.getElementById("initialCard").classList.replace("card", "hide");
  document.getElementById("finalCard").classList.replace("hide", "finalCard");
  document.getElementById("userEmail").innerText = emailInput.value;
}

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const value = emailInput.value;

  if (value.trim() === "") {
    showError("Email is required");
    return;
  }
  if (!validateEmail(value)) {
    showError("Valid email required");
    return;
  }

  showFinalCard();
});
