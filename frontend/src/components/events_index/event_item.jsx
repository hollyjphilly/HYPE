import React from "react";
import { Link } from "react-router-dom";

const EventItem = ({ event }) => {
  const dateObj = new Date(event.dateTime);
  const date = dateObj.toDateString();
  const time = dateObj.toLocaleTimeString("en-Us");
  return (
    <div className="event-single-container">
      <img src="" alt="" className="event-thumbnail" />
      <div className="event-info">
        <p>{`${date} ${time}`}</p>
        <Link to={`/events/${event._id}`}>
          <h3>{event.title}</h3>
        </Link>
        <p>{event.description}</p>
        <p>{event.maxCapacity} attendees</p>
      </div>
    </div>
  );
};

export default EventItem;
