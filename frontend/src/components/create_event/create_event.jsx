import React from "react";
import CreateEventForm from "./create_event_form_container";
// import MakeMap from "../../util/map";
import { 
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker 
} from "react-google-maps";
const googleAPI = require("../../config/keys2").googleMapsApi;

class CreateEvent extends React.Component {
  constructor(props) {
    super(props);
    this.lat = null;
    this.lng = null;
  }

  render() {

    
    const showLat = 40.673842;
    const showLng = -73.970083;
    const WrappedMap = withScriptjs(
      withGoogleMap(() => {
        return (
          <GoogleMap
            defaultCenter={{ lat: showLat, lng: showLng }}
            defaultZoom={12}
            onClick={(e) => {
              this.lat = e.latLng.lat();
              this.lng = e.latLng.lng();
              console.log(this.lat);
              console.log(this.lng);
            }}
          >

            <Marker 
              position={{ lat: this.lat, lng: this.lng }}
            />

          </GoogleMap>
        );
      })
    );
    
    return (
      <div className="event-form-main-div">
        <div className="create-event-form-map-container">
          <CreateEventForm />
          <div className="create-event-map-container">
            <div className="another-div">
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
        </div>
      </div>
    );
  }
}

export default CreateEvent;
