import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
const googleAPI = require("../../config/keys2").googleMapsApi;

class MapIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: this.props.events,
      selectedEvent: null,
    };
  }

  componentDidMount() {
    this.props.fetchAllEvents();
  }

  render() {
    const { events } = this.props;
    const { selectedEvent } = this.state;
    const WrappedMap = withScriptjs(
      withGoogleMap(() => {
        return (
          <GoogleMap
            defaultCenter={{ lat: 40.73061, lng: -73.935242 }}
            defaultZoom={11}
          >
            {events &&
              events.map((game) => (
                <Marker
                  key={game._id}
                  position={{
                    lat: game.location[0],
                    lng: game.location[1],
                  }}
                  onClick={() => this.setState({ selectedEvent: game })}
                />
              ))}
            {this.state.selectedEvent && (
              <InfoWindow
                position={{
                  lat: selectedEvent.location[0],
                  lng: selectedEvent.location[1],
                }}
                onCloseClick={() => {
                  this.state.selectedEvent = null;
                }}
              >
                <div className="event-map-info-window-container">
                  <div className="event-map">
                    {/* <h3>Hosted by {showEvent.host.username}</h3>
                    <h3>Sport: {showEvent.sport}</h3>
                    <h3>Description:</h3>
                    <p>{showEvent.description}</p>
                    <p>Max: {showEvent.maxCapacity}</p>
                    <p>{`${date} ${time}`}</p>
                    <p>Max Capacity: {showEvent.maxCapacity}</p>
                    <p>Attending: {showEvent.usersAttending.length}</p> */}
                  </div>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        );
      })
    );
    return (
      <div className="map-index-container">
        <div className="map-index">
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=
                  ${googleAPI}`}
            loadingElement={<div style={{ height: "100%" }} />}
            containerElement={<div style={{ height: "100%" }} />}
            mapElement={<div style={{ height: "100%" }} />}
          />
        </div>
      </div>
    );
  }
}

export default MapIndex;
