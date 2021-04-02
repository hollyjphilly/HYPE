import React from "react";
import showMapStyles from "../map_styles";
import CreateEventForm from "./create_event_form_container";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";

class CreateEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      lng: null,
      markerShown: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
      markerShown: true,
    });
  }

  render() {
    const showLat = this.state.lat || 40.673842;
    const showLng = this.state.lng || -73.970083;
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
            onClick={(e) => this.handleClick(e)}
          >
            {this.state.markerShown && (
              <Marker position={{ lat: this.state.lat, lng: this.state.lng }} />
            )}
          </GoogleMap>
        );
      })
    );
    return (
      <div className="event-form-main-div">
        <div className="create-event-form-map-container">
          <CreateEventForm lat={this.state.lat} lng={this.state.lng} />
          <div className="create-event-map-container">
            <div className="another-div">
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
        </div>
      </div>
    );
  }
}

export default CreateEvent;
