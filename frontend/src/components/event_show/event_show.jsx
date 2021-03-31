import React from 'react';

class EventShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      joinButton: "Join Now"
    }
    this.handleEventJoin = this.handleEventJoin.bind(this);
  }

  componentDidMount() {
    this.props.fetchOneEvent(this.props.eventId);
  }

  handleEventJoin() {
    const {event, currentUser} = this.props;
    let spotTaken = event.maxCapacity - event.usersAttending.length;
    
    if(currentUser._id === event.host) {
      this.setState({
        display: true, 
        joinButton: "You are the Host"
      })
    }else if (spotTaken < event.maxCapacity) {
      if(!event.usersAttending.includes(currentUser._id)) {
        // NEED TO CREATE A SAVEEVENT ACTION
        // this.props.saveEvent();
        // this.setState({joinButton: "JOINED"})
      }
    } else {
      this.setState({
        display: true, 
        joinButton: "Event at max capacity"
      });
    }
  }

  renderEvent() {
    const {event} = this.props;
    let spotTaken = event.maxCapacity - event.usersAttending.length;
    
    return (
      <div className="single-event-container">
        <div className="event-images">
          IMAGES GO HERE
        </div>
        <div className="event-info-container">
          <div className="event-header">
            <h2>{event.title}</h2>
            <button 
              onClick={this.handleEventJoin} 
              disabled={this.state.display}
              >
                {this.state.joinButton}
            </button>
          </div>
          <h3>Hosted by {event.host.name}</h3>
          <h3>Sport: {event.sport}</h3>
          <h3>Description:</h3>
          <p>{event.description}</p>
          <p>Max: {event.maxCapacity}</p>
          <p>Attending: {spotTaken}</p>
        </div>
        <div className="event-map">
          MAP GOES HERE
        </div>
      </div>
    )
  }

  renderLoading() {
    return (
      <h3>LOADING FIGURE</h3>
    )
  }

  render() {
    return (this.props.event) ? this.renderEvent() : this.renderLoading();
  }
}

export default EventShow