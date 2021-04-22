import React from "react";
import showMapStyles from "../map_styles";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";
import { Redirect } from "react-router-dom";

class EventShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false };
    this.handleEventJoin = this.handleEventJoin.bind(this);
    this.handleEventUnjoin = this.handleEventUnjoin.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  componentDidMount() {
    this.props.fetchOneEvent(this.props.eventId);
  }

  handleEventJoin() {
    const { currentUser, addUserToEvent, eventId } = this.props;
    addUserToEvent(eventId, {
      usersAttending: currentUser.id,
    });
  }

  handleEventUnjoin() {
    const currentUser = this.props.currentUser;

    this.props.removeUserFromEvent(this.props.eventId, {
      usersAttending: currentUser.id,
    });
  }

  handleRedirect() {
    this.setState({ redirect: true });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/login" />;
    }
    //Checking for an event, Loading...
    const { eventId, events, currentUser, loggedIn } = this.props;
    if (!events.length) {
      return <div class="lds-ripple"><div></div><div></div></div>;
    }
    // const showEvent = events.find((event) => event._id === eventId);
    const showEvent = events.find((event) => event._id === events[0]._id);
    const currentId = loggedIn ? currentUser.id : undefined;
    const isHost = showEvent.host._id === currentId;
    const isLoggedIn = loggedIn;
    const alreadyAttending = loggedIn
      ? showEvent.usersAttending.includes(currentUser.id)
      : null;

    //Date and time parse
    const dateObj = new Date(showEvent.dateTime);
    const date = dateObj.toDateString();
    const time = dateObj.toLocaleTimeString("en-Us", {
      hour: "2-digit",
      minute: "2-digit",
    });

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

    const joinButton = () => {
      if (isHost) {
        return (
          <button className="single-event-join-button" disabled>
            YOU'RE HOST
          </button>
        );
      } else if (alreadyAttending) {
        return (
          <button
            className="single-event-join-button"
            onClick={this.handleEventUnjoin}
          >
            LEAVE EVENT
          </button>
        );
      } else if (isLoggedIn && !isHost) {
        return (
          <button
            className="single-event-join-button"
            onClick={this.handleEventJoin}
          >
            JOIN EVENT
          </button>
        );
      } else {
        return (
          <button
            className="single-event-join-button"
            onClick={this.handleRedirect}
          >
            JOIN EVENT
          </button>
        );
      }
    };

    return (
      <div className="event-show-main-div">
        <div className="event-container">
          <div className="single-event-container">
            {/* <div className="event-images">IMAGES GO HERE</div> */}
            <div className="event-info-container">
              <div className="event-header">
                <div className="event-header-text">
                  <h2>{showEvent.title}</h2>
                  <p>{`${date} ${time}`}</p>
                  <p>{showEvent.address}</p>
                </div>
                {joinButton()}
              </div>
              <div className="single-event-description">
                <h3 className="single-event-description-h3">
                  Hosted by {showEvent.host.username}
                </h3>
                <h3 className="single-event-description-h3">
                  There are{" "}
                  {showEvent.maxCapacity - showEvent.usersAttending.length}{" "}
                  spots left.
                </h3>
                <p className="single-event-details-p">
                  {showEvent.description}
                </p>
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
