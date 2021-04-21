const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateEventInput(data) {
  let errors = {};

  data.title = validText(data.title) ? data.title : "";
  data.description = validText(data.description) ? data.description : "";
  data.host = validText(data.host) ? data.host : "";
  data.maxCapacity = validText(data.maxCapacity) ? data.maxCapacity : "";
  data.dateTime = data.dateTime === "T" ? "" : data.dateTime;
  data.address = validText(data.address) ? data.address : "";

  // errors displayed to user

  if (Validator.isEmpty(data.title)) {
    errors.title = "Title is required";
  }

  if (Validator.isEmpty(data.address)) {
    errors.address = "Please choose a valid address";
  }

  if (Validator.isEmpty(data.dateTime)) {
    errors.dateTime = "Date and Time is required";
  }

  if (Validator.isEmpty(data.maxCapacity)) {
    errors.maxCapacity = "Please choose how many people can play";
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = "Description is required";
  }

  // internal errors

  if (Validator.isEmpty(data.host)) {
    errors.host = "Host is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
