import React from 'react';
import EventItem from './event_item'

class EventsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.renderEvents = this.renderEvents.bind(this)
  }

  componentDidMount() {
    this.props.fetchAllEvents();
  }
  
  renderEvents() {
    debugger
    return this.props.events.map((event, index) => (
      <div className="event-index-container">
        <EventItem event={event} key={index} />
      </div>
    ))
  } 
  

  noEvents() {

    return <div className="no-events">
      Where did I put those damn events!?
    </div>
  }
  

  render() {

    let eventList = (this.props.events.length) ? (this.renderEvents()) : (this.noEvents())

    debugger
    return (
      <>
      <h2>Events</h2>
        {eventList}
      </>
    )
  }
}

export default EventsIndex;