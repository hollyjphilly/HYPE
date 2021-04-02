import React from "react";
import showMapStyles from "../map_styles";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

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
    let { selectedEvent } = this.state;
    const options = {
      styles: showMapStyles,
      disableDefaultUI: true,
      zoomControl: true,
    };
    const WrappedMap = withScriptjs(
      withGoogleMap(() => {
        return (
          <GoogleMap
            defaultCenter={{ lat: 40.73061, lng: -73.935242 }}
            defaultZoom={11}
            options={options}
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
            {selectedEvent && (
              <InfoWindow
                position={{
                  lat: selectedEvent.location[0],
                  lng: selectedEvent.location[1],
                }}
                onCloseClick={() => {
                  selectedEvent = null;
                }}
              >
                <div className="event-map-info-window-container">
                  <div className="event-map-info">
                    <a to={`/events/${selectedEvent._id}`}>
                      <h1>{selectedEvent.title}</h1>
                    </a>
                    <h2>{`${new Date(
                      selectedEvent.dateTime
                    ).toDateString()} ${new Date(
                      selectedEvent.dateTime
                    ).toLocaleDateString("en-Us")}`}</h2>
                    <br />
                    <p>{selectedEvent.description}</p>
                    <br />
                    <p>{selectedEvent.usersAttending.length} attendees</p>
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
            googleMapURL={
              "https://maps.googleapis.com/maps/api/js?key=AIzaSyDVt-WmXfXrG4hDwxbM6Ctir_Q8e1VicE8"
            }
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
