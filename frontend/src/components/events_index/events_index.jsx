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
    return this.props.events.map((event) => (
        <EventItem event={event} key={event.id} />
    ))
  } 

  render() {
    return (
      <><div className="events-purple-bar"></div>
          <div className="events-wrapper">
            <div className="events-purple-bar-text slide">
              <h1>Events</h1>
            </div>
          </div>
      <div className="event-index-container">
        <div className="event-index-content">

          {this.props.events.length ? 
            this.renderEvents() : 
            <h2>Where did I put those damn events!?</h2>
          }
        </div>
      </div>
      </>
    )
  }
}

export default EventsIndex;