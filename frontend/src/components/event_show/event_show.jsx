import React from 'react';
import MakeMap from '../../util/map'

class EventShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      joinButton: "Join Now",
    };
    this.handleEventJoin = this.handleEventJoin.bind(this);
  }

  componentDidMount() {
    this.props.fetchOneEvent(this.props.eventId);

    ///MAPS HAPPENING
    const mapOptions = {
      center: { lat: 40.673842, lng: -73.970083 }, 
      zoom: 12,
    }

    // this.map = new google.maps.Map(document.getElementById('the-map'), mapOptions);
    ///MAPS ABOVE
  }

  handleEventJoin() {
    const {event, currentUser} = this.props;
    
    if(currentUser._id === event.host) {
      this.setState({
        display: true, 
        joinButton: "You are the Host"
      })
    }else if (event.usersAttending.length < event.maxCapacity) {
      if(!event.usersAttending.includes(currentUser._id)) {

        // NEED TO CREATE A SAVEEVENT ACTION
        // this.props.saveEvent();
        // this.setState({joinButton: "JOINED"})
      }
    } else {
      this.setState({
        display: true,
        joinButton: "Event at max capacity",
      });
    }
  }

  renderEvent() {
    const { event } = this.props;
    let spotTaken = event.maxCapacity - event.usersAttending.length;
    const dateObj = new Date(event.dateTime);
    const date = dateObj.toDateString();
    const time = dateObj.toLocaleTimeString("en-Us");

    return (
      <div className="single-event-container">
        <div className="event-images">IMAGES GO HERE</div>
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
          <p>{`${date} ${time}`}</p>
          <p>Attending: {spotTaken}</p>
        </div>
        <div className="event-map">
          LOADING MAP PLEASE WAIT YOU BEAUTIFUL PERSON
        </div>
      </div>
    );
  }

  renderLoading() {
    return <h3>LOADING FIGURE</h3>;
  }

  render() {
    // return (this.props.event) ? this.renderEvent() : this.renderLoading();

    return(
      // <div>NOTHING</div>
      <MakeMap />
    )
  }
}

export default EventShow;
