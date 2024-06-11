function validatePassword(password) {
  if (checkisValidLength(password) === false) {
    console.log("Password must be between 6 and 10 characters");
  }
  if (!checkCharsChecker(password) === true) {
    console.log("Password must consist only of letters and digits");
  }
  if (!checkDigitChecker(password) === true) {
    console.log("Password must have at least 2 digits");
  } else {
    console.log("Password is valid");
  }
}

function checkisValidLength(password) {
  if (password.length > 10 || password.length < 6) {
    return false;
  }
  return true;
}
function checkCharsChecker(password) {
  return /^[a-zA-Z0-9]+$/.test(password);
}
function checkDigitChecker(password) {
  return /^(?=(.*\d){2}).*$/.test(password);
}

validatePassword("pass");
validatePassword("APass123");
validatePassword("Pa$s$s");
