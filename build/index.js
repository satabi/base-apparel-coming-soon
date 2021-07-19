const form = document.getElementById("form");
const emailAddress = document.getElementById("email-address");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checInputs();
});

function checInputs() {
  const emailAddressValue = emailAddress.value.trim();
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (emailAddressValue === "") {
    inputError(emailAddress, "Please enter an email");
  } else if (!re.test(emailAddressValue)) {
    inputError(emailAddress, "Please provide a valid email");
  } else {
    inputSuccess(emailAddress);
  }
}

function inputError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form__group error";

  const err = formControl.querySelector(".err-message");
  err.innerText = message;
}

function inputSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form__group success";
}
