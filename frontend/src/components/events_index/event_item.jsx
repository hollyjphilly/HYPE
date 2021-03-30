import React from 'react';
import { Link } from 'react-router-dom';

const EventItem = ({event}) => {

  return (
    <div className="event-single-container">
      <img src="" alt="" className="event-thumbnail"/>
      <div className="event-info">
        <p>{event.dateTime}</p>
        <Link to={`/events/${event._id}`}><h3>{event.title}</h3></Link>
        <p>{event.description}</p>
        <p>{event.maxCapacity} attendees</p>
      </div>
    </div>
  )
}

export default EventItem;