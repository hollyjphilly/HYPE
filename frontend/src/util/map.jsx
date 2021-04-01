import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const googleAPI = require("../config/keys2").googleMapsApi;

class MakeMap extends React.Component {


  render() {
    //take location info from event, place pin, center map on pin

    const WrappedMap = withScriptjs(
      withGoogleMap(() => {
        return (
          <GoogleMap
            defaultCenter={{ lat: 40.673842, lng: -73.970083 }}
            defaultZoom={12}
          />
        );
      })
    );
    
    return (

      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=
          ${googleAPI}`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />

    );
  }
}
export default MakeMap;
