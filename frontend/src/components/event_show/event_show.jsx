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
      return <div className="lds-ripple"><div></div><div></div></div>;
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
    const day = dateObj.toLocaleDateString(undefined, { weekday: 'long' })
    const month = dateObj.toLocaleDateString(undefined, { month: 'long' })
    const date = dateObj.toLocaleDateString(undefined, { day: 'numeric' })
    const year = dateObj.toLocaleDateString(undefined, { year: 'numeric' })
    const fullDate = dateObj.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
    const time = dateObj.toLocaleTimeString("en-Us", {
      hour: "numeric",
      minute: "2-digit",
      timeZoneName: 'short'
    });

    //map logic
    const showLat = showEvent.location[0];
    const showLng = showEvent.location[1];
    const options = {
      styles: showMapStyles,
      disableDefaultUI: true,
      zoomControl: false,
      gestureHandling: "none"
    };
    const WrappedMap = withScriptjs(
      withGoogleMap(() => {
        return (
          <GoogleMap
            defaultCenter={{ lat: showLat, lng: showLng }}
            defaultZoom={14}
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
    
      <div id="event-show">

        <div className="events-green-bar"></div>
        <div className="events-wrapper">
          <div className="events-green-bar-text slide">
            <h1>The Deets</h1>
          </div>
        </div>

        <div className="center">
          <div id="event-container">
            <div id="event-show-header">
              <div className="col">
              <h1>{showEvent.title}</h1>
              <h2>{`${day}, ${month} ${date}, ${year}`}</h2></div>
              <div className="col">
                {joinButton()}
                <p className="single-event-description-h3">
                  There are{" "}
                  {showEvent.maxCapacity - showEvent.usersAttending.length}{" "}
                  spots left.
                </p>
              </div>
            </div>
            <div id="event-show-body">
              <div id="row-1">
                <div>
                  <img src={showEvent.imgUrl} alt=""/>
                  <h2>{showEvent.host.username} says</h2>
                  <p>"{showEvent.description}"</p>
                </div>
                <div id="where-when">
                  <div className="row">
                    <div className="svg">
                      <svg viewBox="0 0 512 512" id="clock-icon">
                        <path
                          d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z">
                        </path>
                      </svg>
                    </div>
                    <p>{fullDate}<br/>{time}</p>
                  </div>
                  
                  <div className="row">
                    <div className="svg">
                      <svg viewBox="0 0 512 512" id="loc-icon">
                        <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                      </svg>
                    </div>
                    <p>{showEvent.address}</p>
                  </div>
                  
                  <div className="row">
                    <div className="event-map">
                    <WrappedMap
                      googleMapURL={
                        "https://maps.googleapis.com/maps/api/js?key=AIzaSyDVt-WmXfXrG4hDwxbM6Ctir_Q8e1VicE8"
                      }
                      loadingElement={<div style={{ height: "100%" }} />}
                      containerElement={<div style={{ height: "100%" }} />}
                      mapElement={<div style={{ height: "100%" }} />}
                    />
                  </div></div>
                </div>
              </div>
              <div id="row-2">
                
              </div>
            </div>
          </div>
        </div>
    </div>
    );
  }
}

export default EventShow;
