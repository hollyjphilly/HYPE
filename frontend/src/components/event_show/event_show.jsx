import React from "react";
import showMapStyles from "../map_styles";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";

class EventShow extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   display: false,
    //   joinButton: "Join Now",
    // };

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
    const currentUser = this.props.currentUser;

    this.props.addUserToEvent(this.props.eventId, {
      usersAttending: currentUser.id,
    });
  }

  render() {
    //Checking for an event, Loading...
    const { eventId, events, currentUser } = this.props;
    if (!events.length) {
      return <div>LOADING...</div>;
    }
    const showEvent = events.find((event) => event._id === eventId);

    const cantJoin =
      showEvent.usersAttending.includes(currentUser.id) ||
      showEvent.host._id === currentUser.id ||
      showEvent.usersAttending.length >= showEvent.maxCapacity;

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
    };
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
                {!cantJoin ? (
                  <button onClick={this.handleEventJoin}> MAKE JOIN </button>
                ) : (
                  ""
                )}
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
              googleMapURL={
                "https://maps.googleapis.com/maps/api/js?key=AIzaSyDVt-WmXfXrG4hDwxbM6Ctir_Q8e1VicE8"
              }
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
