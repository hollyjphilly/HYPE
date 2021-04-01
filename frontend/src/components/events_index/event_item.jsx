import React from "react";
import { NavLink } from "react-router-dom";

const EventItem = ({ event }) => {
  const dateObj = new Date(event.dateTime);
  const date = dateObj.toDateString();
  const time = dateObj.toLocaleTimeString("en-Us");
  return (
    <NavLink to={`/events/${event._id}`}><div className="event-item">
      <img src="" alt="" className="event-thumbnail" />
      <div className="event-info">
        <h1>{event.title}</h1>
        <h2>{`${date} ${time}`}</h2>
        <div className="event-description">{event.description}</div>
        <div className="event-attendees"><p>{event.usersAttending.length} attendees</p></div>
      </div>
    </div></NavLink>
  );
};

export default EventItem;
