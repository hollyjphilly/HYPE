const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateEventInput(data) {
  let errors = {};

  data.title = validText(data.title) ? data.title : "";
  data.description = validText(data.description) ? data.description : "";
  data.host = validText(data.host) ? data.host : "";
  data.maxCapacity = validText(data.maxCapacity) ? data.maxCapacity : "";
  data.dateTime = validText(data.dateTime) ? data.dateTime : "";

  if (Validator.isEmpty(data.title)) {
    errors.title = "Title is required";
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = "Description is required";
  }

  if (Validator.isEmpty(data.host)) {
    errors.host = "Host is required";
  }

  if (Validator.isEmpty(data.maxCapacity)) {
    errors.maxCapacity = "Max Capacity is required";
  }

  if (Validator.isEmpty(data.dateTime)) {
    errors.dateTime = "Date and Time is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
