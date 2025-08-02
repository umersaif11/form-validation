// index.js
import "./styles.css";

const form = document.querySelector("form");
const email = document.getElementById("user-email");
const emailError = document.querySelector("#user-email + span.email-error");

email.addEventListener("input", () => {
  if (email.validity.valid) {
    emailError.textContent = ""; 
    emailError.className = "email-error"; 
  } else {
    showError();
  }
});

form.addEventListener("submit", (event) => {
  if (!email.validity.valid) {
    showError();
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "You need to enter an email address.";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Entered value needs to be an email address.";
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }
  emailError.className = "email-error active";
}

  