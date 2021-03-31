import React from 'react';
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap
} from "react-google-maps";

const googleAPI = require('../config2/keys2').googleMapsApi;

class MakeMap extends React.Component {
  Map() {

    return(
      <GoogleMap 
      defaultCenter={{ lat: 40.673842, lng: -73.970083}}
      defaultZoom={12}
      />
    )
  }

  
  render(){
    
    
    const WrappedMap = withScriptjs(withGoogleMap(() => {
      return (
        <GoogleMap 
          defaultCenter={{ lat: 40.673842, lng: -73.970083}}
          defaultZoom={12}
        />)
    }));
    // debugger
    console.log(process.env.REACT_APP_GOOGLE_KEY)
    return(
      <div style={{width: '500px', height: '500px'}}>

        <WrappedMap 
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=
          ${googleAPI}`}
          loadingElement={<div style={{ height: "100%"}} />}
          containerElement={<div style={{ height: "100%"}} />}
          mapElement={<div style={{ height: "100%"}} />}
          />

      </div>
    )
  }
}
export default MakeMap;