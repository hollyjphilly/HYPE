import React from "react";
import { NavLink } from "react-router-dom";

const EventItem = ({ event, history, formType }) => {
  debugger
  const dateObj = new Date(event.dateTime);
  const date = dateObj.toDateString();
  const fullTime = dateObj.toLocaleTimeString("en-Us").split(" ");
  const time = fullTime[0].slice(0, fullTime[0].length-3) + " " + fullTime[1];
  const description = event.description.length > 60 ? event.description.slice(0, 100) + "..." : event.description;
  const displayImages = formType ? (
      ""
    ) : (
      <img className="event-image" src={event.imgUrl} alt="Event Image" />
    );
    
  return (
    <div
      className="event-image-container"
      onClick={() => {
        history.push(`/events/${event._id}`);
      }}
    >
      {displayImages}
      <div className="event-item">
        <img src="" alt="" className="event-thumbnail" />
        <div className="event-info">
          <NavLink to={`/events/${event._id}`}>
            <h1>{event.title}</h1>
          </NavLink>
          <h2>{`${date}  ${time}`}</h2>
          <div className="event-description">{description}</div>
          <div className="event-attendees">
            <p>{event.usersAttending.length} attendees</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventItem;
