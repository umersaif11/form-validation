// index.js
import "./styles.css";
import {constraints} from "./postal-codes.js"

const postalError = document.querySelector(".postal-code-error");
const country = document.getElementById("user-country");
const postalCodeField = document.getElementById("user-postal-code");
const constraint = new RegExp(constraints[country.value][0], "");

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

postalCodeField.addEventListener("input", () => {
    if(constraint.test(postalCodeField.value)){
        postalError.textContent = "";
        postalError.className = "postal-code-error";
    } else {
        checkPostalCode();
    }
})
country.addEventListener("change", () => {
    if(constraint.test(postalCodeField.value)){
        postalError.textContent = "";
        postalError.className = "postal-code-error";
    } else {
        checkPostalCode();
    }
})
form.addEventListener("submit", (event) => {
    if(!constraint.test(postalCodeField.value) || 
    postalCodeField.validity.valueMissing){
        checkPostalCode();
        event.preventDefault();
     }
})

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
function checkPostalCode(){
    if(postalCodeField.validity.valueMissing){
        postalError.textContent = `You need to enter a postal code.
        Please turn on CAPS LOCK before entering code.`;
    } else if(!constraint.test(postalCodeField.value)){
        postalError.textContent = `${constraints[country.value][1]}`;
    }
    postalError.className = "postal-code-error active";
}
