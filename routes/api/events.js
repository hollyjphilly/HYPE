const express = require("express");
const router = express.Router();
const passport = require("passport");
const validateEventInput = require("../../validation/events");
const Event = require("../../models/Event");

router.get("/", (req, res) => {
  Event.find()
    .sort({ dateTime: 1 }) // find all events and send them back in
    // with newest events first
    .then((events) => res.json(events))
    .catch((err) => res.status(400).json(err));
});

router.get("/hosted/:user_id", (req, res) => {
  Event.find({ host: req.params.user_id })
    .sort({ dateTime: 1 })
    .then((events) => res.json(events))
    .catch((err) => res.status(400).json(err));
});

router.get("/attending/:user_id", (req, res) => {
  Event.find({ usersAttending: { $in: [req.params.user_id] } })
    .sort({ dateTime: 1 })
    .then((events) => res.json(events))
    .catch((err) => res.status(400).json(err));
});

router.get("/:id", (req, res) => {
  Event.findById(req.params.id)
    .populate("host", "username")
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
      host: req.user.id,
      maxCapacity: req.body.maxCapacity,
      usersAttending: req.body.usersAttending,
      location: req.body.location,
      address: req.body.address,
      dateTime: req.body.dateTime,
      imgUrl: req.body.imgUrl,
    });
    newEvent
      .save()
      .then((newEvent) => res.json(newEvent))
      .catch((err) => console.log(err));
  }
);

router.delete("/:id", (req, res) => {
  Event.findOneAndRemove({ _id: req.params.id }, (err) => {
    if (err) {
      return res.status(400).json({ error: "Event not found" });
    }
    return res
      .status(200)
      .json({ id: req.params.id, msg: "Event has been deleted" });
  });
});

router.put("/:id", (req, res) => {
  Event.updateOne(
    { _id: req.params.id },
    { $addToSet: { usersAttending: [req.body.usersAttending] } },
    (err) => {
      if (err) {
        return res
          .status(400)
          .json({ error: "Event not updaded/event not found" });
      } else {
        const game = Event.findById(req.params.id).populate("host", "username");
        game.then((gme) => res.json(gme)).catch((err) => console.log(err));
      }
    }
  );
});

router.put("/remove/:id", (req, res) => {
  Event.updateOne(
    { _id: req.params.id },
    { $pullAll: { usersAttending: [req.body.usersAttending] } },
    (err) => {
      if (err) {
        return res
          .status(400)
          .json({ error: "Event not updaded/event not found" });
      } else {
        const game = Event.findById(req.params.id).populate("host", "username");
        game.then((gme) => res.json(gme)).catch((err) => console.log(err));
      }
    }
  );
});

module.exports = router;
