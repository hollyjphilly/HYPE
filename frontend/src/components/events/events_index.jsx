import React from 'react';


class EventsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllEvents();
  }

  render() {
    const {events} = this.props;

    let renderEvents = events.map((event, index) => (
      <div className="event-index-container">
        <EventItem event={event} key={index} />
      </div>
      )
    )

    let noEvents = (
      <div className="no-events">
        There are no events currently available
      </div>
    )

    // return (events) ? (renderEvents) : (noEvents);
    return (
      <>
      <h2>Events</h2>
        {(events) ? (renderEvents) : (noEvents)}
      </>
    )
  }
}

export default EventsIndex;