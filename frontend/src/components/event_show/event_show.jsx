import React from "react";
import showMapStyles from '../map_styles'
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";
const googleAPI = require("../../config/keys2").googleMapsApi;

class EventShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: false,
      joinButton: "Join Now",
    };

    // this.display = false;
    // this.joinButton = "Join Now";

    this.handleEventJoin = this.handleEventJoin.bind(this);
  }

  componentDidMount() {
    this.props.fetchOneEvent(this.props.eventId);
    // setTimeout(() => {
    //   const { events, currentUser } = this.props;
    //   if (currentUser._id === events.host) {
    //     this.joinButton = "You are the Host"
    //   };
    //   if (events.usersAttending.length >= events.maxCapacity) {
    //     this.joinButton = "Event at max capacity"
    //   };
    //   if (events.usersAttending.includes(currentUser._id)) {
    //     this.joinButton = "JOINED"
    //   };
    // }, 0)
  }

  handleEventJoin() {
    
    const currentUser  = this.props.currentUser;
    const events = this.props.events[0];

    debugger

    if (currentUser._id === events.host._id) {
      this.setState({
        display: true,
        joinButton: "You are the Host",
      });
      
      // this.display = true;
      // this.joinButton = "You are the Host";
      
    } else if (events.usersAttending.length < events.maxCapacity) {
      if (!events.usersAttending.includes(currentUser._id)) {
        this.props.addUserToEvent(this.props.eventId, 
          {usersAttending: currentUser._id});
        this.setState({joinButton: "JOINED"})

        // this.props.addUserToEvent(currentUser._id);
        // this.setState({joinButton: "JOINED"})
      }
    } else {
      this.setState({
        display: true,
        joinButton: "Event at max capacity",
      });

      // this.display = true;
      // this.joinButton = "Event at max capacity";

    }
  }

  render() {
    //Checking for an event, Loading...
    const { eventId, events } = this.props;
    if (!events.length) {
      return <div>LOADING...</div>;
    }
    const showEvent = events.find((event) => event._id === eventId);

    //Date and time parse
    const dateObj = new Date(showEvent.dateTime);
    const date = dateObj.toDateString();
    const time = dateObj.toLocaleTimeString("en-Us");

    //map logic
    const showLat = showEvent.location[0];
    const showLng = showEvent.location[1];
    const options = {
      styles: showMapStyles,
      disableDefaultUI: true,
      zoomControl: true,
    }
    const WrappedMap = withScriptjs(
      withGoogleMap(() => {
        return (
          <GoogleMap
            defaultCenter={{ lat: showLat, lng: showLng }}
            defaultZoom={12}
            options={options}
          >
            <Marker
              key={showEvent._id}
              position={{ lat: showLat, lng: showLng }}
            />
          </GoogleMap>
        );
      })
    );

    return (
      <div className="event-show-main-div">
        <div className="event-container">

          <div className="single-event-container">
            {/* <div className="event-images">IMAGES GO HERE</div> */}
            <div className="event-info-container">
              <div className="event-header">
                <h2>{showEvent.title}</h2>
                <button
                  onClick={this.handleEventJoin}
                  disabled={this.state.display}
                >
                  {this.state.joinButton}
                </button>
              </div>
              <div className="single-event-description">
                <h3>Hosted by: {showEvent.host.username}</h3>
                <h3>Sport: {showEvent.sport}</h3>
                <h3>Description:</h3>
                <p>{showEvent.description}</p>
                <p>Max: {showEvent.maxCapacity}</p>
                <p>{`${date} ${time}`}</p>
                <p>Max Capacity: {showEvent.maxCapacity}</p>
                <p>Attending: {showEvent.usersAttending.length}</p>
              </div>
            </div>
          </div>



          <div className="event-map">
            <WrappedMap
              googleMapURL={`https://maps.googleapis.com/maps/api/js?key=
              ${googleAPI}`}
              loadingElement={<div style={{ height: "100%" }} />}
              containerElement={<div style={{ height: "100%" }} />}
              mapElement={<div style={{ height: "100%" }} />}
              />
          </div>
          
        </div>
      </div>
    );
  }
}

export default EventShow;
