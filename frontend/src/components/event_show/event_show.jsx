import React from 'react';
import { 
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker 
} from "react-google-maps";
const googleAPI = require("../../config/keys2").googleMapsApi;

class EventShow extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      display: false,
      joinButton: "Join Now",
      
    };

    //

    this.handleEventJoin = this.handleEventJoin.bind(this);
  }

  componentDidMount() {
    this.props.fetchOneEvent(this.props.eventId);
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




  render() {

    //Checking for an event, Loading...
    const showEvent = this.props.event;
    if (!Object.values(showEvent).length) {return <div>LOADING...</div>}

    //Date and time parse
    const dateObj = new Date(showEvent.dateTime);
    const date = dateObj.toDateString();
    const time = dateObj.toLocaleTimeString("en-Us");

    //map logic
    const showLat = parseFloat(showEvent.location.lat)
    const showLng = parseFloat(showEvent.location.lng)
    const WrappedMap = withScriptjs(
      withGoogleMap(() => {
        return (
          <GoogleMap
            defaultCenter={{ lat: showLat, lng: showLng }}
            defaultZoom={12}
          >

            <Marker 
              key={showEvent._id}
              position={{ lat: showLat, lng: showLng }}
            />

          </GoogleMap>
        );
      })
    );

    // debugger

    return(

      <div className="event-show-main-div">

        <div className="single-event-container">

          <div className="event-images">IMAGES GO HERE</div>
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
            <h3>Hosted by {showEvent.host.username}</h3>
            <h3>Sport: {showEvent.sport}</h3>
            <h3>Description:</h3>
            <p>{showEvent.description}</p>
            <p>Max: {showEvent.maxCapacity}</p>
            <p>{`${date} ${time}`}</p>
            <p>Max Capacity: {showEvent.maxCapacity}</p>
            <p>Attending: {showEvent.usersAttending.length}</p>
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
    )
  
  }
}

export default EventShow;
