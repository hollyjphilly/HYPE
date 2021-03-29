const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.firstName = validText(data.firstName) ? data.firstName : "";
  data.lastName = validText(data.lastName) ? data.lastName : "";
  data.username = validText(data.username) ? data.username : "";
  data.email = validText(data.email) ? data.email : "";
  data.password = validText(data.password) ? data.password : "";
  data.password2 = validText(data.password2) ? data.password2 : "";

  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = "First name is required.";
  }

  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = "Last name is required.";
  }

  if (Validator.isEmpty(data.username)) {
    errors.username = "Username is required.";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email is required.";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "This is not a valid email";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }

  if (!Validator.isLength(data.password, { min: 8, max: 30 })) {
    errors.password = "Password must be between 8 and 30 characters";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords have to match";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
