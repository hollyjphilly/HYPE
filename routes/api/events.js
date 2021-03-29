const express = require("express");
const router = express.Router();
const passport = require("passport");
const validateEventInput = require("../../validation/events");
const Event = require("../../models/Event");

router.get("/test", (req, res) =>
  res.json({ msg: "This is the events route" })
);

router.get("/", (req, res) => {
  Event.find()
    .sort({ dateTime: -1 }) // find all events and send them back in
    // with newest events first
    .then((events) => res.json(events))
    .catch((err) => res.status(400).json(err));
});

// Build users/events instead
// router.get("/user/:user_id", (req, res) => {
//   Event.find({ host: req.params.user_id })
//     .sort({ date: -1 })
//     .then((events) => res.json(events))
//     .catch((err) => res.status(400).json(err));
// });

router.get("/:id", (req, res) => {
  Event.findById(req.params.id)
    .then((event) => res.json(event))
    .catch((err) => res.status(400).json(err));
});

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateEventInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newEvent = new Event({
      title: req.body.title,
      description: req.body.description,
      sport: req.body.sport,
      host: req.user.id,
      maxCapacity: req.body.maxCapacity,
      usersAttending: req.body.usersAttending,
      location: req.body.location,
      dateTime: req.body.dateTime,
    });

    newEvent.save().then((event) => res.json(newEvent));
  }
);

module.exports = router;
