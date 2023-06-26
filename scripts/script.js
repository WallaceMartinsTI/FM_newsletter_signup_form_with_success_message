/* Elements */
const inputField = document.querySelector("#email");
const errorMessage = document.querySelector("#error");
const mainContainer = document.querySelector(".container");
const thanksMessage = document.querySelector(".thanks-message");
const mailTo = document.querySelector("#mailTo");

// Display image based on device
const image = document.querySelector("#image");
const width = window.innerWidth;
if (window.innerWidth > 969) {
  image.src = "./assets/images/illustration-sign-up-desktop.svg";
} else {
  image.src = "./assets/images/illustration-sign-up-mobile.svg";
}

const emailValidator = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const submit = () => {
  let email = document.querySelector("#email");

  if (emailValidator(email.value)) {
    mainContainer.classList.toggle("hidden");
    thanksMessage.classList.toggle("hidden");
    mailTo.innerText = email.value;
  } else {
    inputField.classList.add("input-error");
    errorMessage.classList.remove("hidden");
  }
};

inputField.addEventListener("click", function () {
  inputField.classList.remove("input-error");
  errorMessage.classList.add("hidden");
});

const reload = () => {
  window.location.reload();
};
