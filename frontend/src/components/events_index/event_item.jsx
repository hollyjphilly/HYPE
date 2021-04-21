import React from "react";
import { NavLink } from "react-router-dom";

const EventItem = ({ event, history }) => {
  // 
  const dateObj = new Date(event.dateTime);
  const date = dateObj.toDateString();
  const time = dateObj.toLocaleTimeString("en-Us");
  return (
    <div className="event-item" onClick={() => {history.push(`/events/${event._id}`);}}>
      <img src="" alt="" className="event-thumbnail" />
      <div className="event-info">
        <NavLink to={`/events/${event._id}`}><h1>{event.title}</h1></NavLink>
        <h2>{`${date} ${time}`}</h2>
        <div className="event-description">{event.description}</div>
        <div className="event-attendees"><p>{event.usersAttending.length} attendees</p></div>
      </div>
    </div>
  );
};

export default EventItem;
