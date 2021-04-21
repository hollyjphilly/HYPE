const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  host: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  maxCapacity: {
    type: Number,
    required: true,
  },
  usersAttending: {
    type: Array,
    default: [],
  },
  location: {
    type: Array,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  dateTime: {
    type: Date,
    required: true,
  },
  imgUrl: {
    type: String,
    default:
      "https://lh3.googleusercontent.com/d/1OkWp6IUDqmPDnFTRNqLbPBJloE8nAczb=s220?authuser=0",
  },
  created: {
    type: Date,
    default: () => Date.now() - 4 * 60 * 60 * 1000,
  },
});

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;
