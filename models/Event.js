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
  sport: {
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
    // required: true,
    default: [],
  },
  location: {
    type: String,
    required: true,
    default: "0, 0",
  },
  dateTime: {
    type: Date,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;
