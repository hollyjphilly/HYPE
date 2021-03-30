import React from 'react';
import EventItem from './event_item'

class EventsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.events = props.events

    this.renderEvents = this.renderEvents.bind(this)
    this.noEvents = this.noEvents.bind(this)
  }

  componentDidMount() {
    this.props.fetchAllEvents();
  }
  
  renderEvents() {
    
    return this.events.map((event, index) => (
      <div className="event-index-container">
        <EventItem event={event} key={index} />
      </div>
    ))
  } 
  

  noEvents() {
    return <div className="no-events">
      There are no events currently available
    </div>
  }
  

  render() {
    let eventList = (this.events.length > 0) ? (this.renderEvents()) : (this.noEvents())
    
    return (
      <>
      <h2>Events</h2>
        {eventList}
      </>
    )
  }
}

export default EventsIndex;