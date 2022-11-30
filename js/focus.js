function focusOn() {
  if (checkLength("name")) {
    document.getElementById("name").focus();
    console.log("focus on name");
  } else if (checkLength("surname")) {
    document.getElementById("surname").focus();
    console.log("focus on surname");
  } else if (checkLength("email")) {
    document.getElementById("email").focus();
    console.log("focus on email");
  } else if (checkLength("password")) {
    document.getElementById("password").focus();
    console.log("focus on password");
  }
  return false;
}

function checkLength(id) {
  const b = document.getElementById(id).value.length < 2;
  console.log(b);
  return b;
}
