
const form = document.getElementById("form");
const email = document.getElementById("email");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailVal = email.value;

  if (!validateEmail(emailVal)) {
    document.getElementById("email").style.color = "red";
    document.getElementById("inputMsg").innerHTML = "Please provide a valid email";
    document.getElementById("error-icon").classList.remove("error");
  } else {
    document.getElementById("email").style.color = "hsl(0, 6%, 24%)";
    document.getElementById("inputMsg").innerHTML = "Thank you !";
    document.getElementById("error-icon").classList.add("error");
  }
});

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
