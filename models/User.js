const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: () => Date.now() - 4 * 60 * 60 * 1000,
  },
  avatar: {
    type: Map,
  }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
