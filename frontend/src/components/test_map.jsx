import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import showMapStyles from "./map_styles";


export class MapContainer extends Component {

  state = {
    showingInfoWindow: false,  // Hides or shows the InfoWindow
    activeMarker: {},          // Shows the active marker upon click
    selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {

    return (
      <Map
        google={this.props.google}
        zoom={14}
        styles={showMapStyles}
        mapTypeControl={false}
        fullscreenControl={false}
        streetViewControl={false}
        zoom={11}
        initialCenter={{ lat: 40.672410, lng: -73.969861 }}
      >


        {/* <Marker
          onClick={this.onMarkerClick}
          name={'Kenyatta International Convention Centre'}
        />

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >

          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
          
        </InfoWindow> */}

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDVt-WmXfXrG4hDwxbM6Ctir_Q8e1VicE8',
  libraries: ['places']
})(MapContainer);