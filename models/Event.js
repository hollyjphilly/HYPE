const mongoose = require("mongoose");
const moment = require("moment-timezone");

// const dateNYST = moment.tz(Date.now(), "America/Phoenix");
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
    type: Object,
    required: true,
    default: { lat: "40.673842", lng: "-73.970083" },
  },
  dateTime: {
    type: Date,
    required: true,
  },
  date: {
    type: Date,
    default: () => Date.now() - 4 * 60 * 60 * 1000,
  },
});

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;
