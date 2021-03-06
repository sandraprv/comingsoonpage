
const form = document.getElementById("form");
var email = document.getElementById("email");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  var emailVal = email.value;

  if (!validateEmail(emailVal)) {
    document.getElementById("email").classList.add("error");
    document.getElementById("inputMsg").innerHTML = "Please provide a valid email";
    document.getElementById("inputMsg").style.color = "red";

  } else {
    document.getElementById("email").classList.remove("error");
    document.getElementById("inputMsg").innerHTML = "Thank you !";
    document.getElementById("inputMsg").style.color = "black";
  }

  form.reset();
});

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
