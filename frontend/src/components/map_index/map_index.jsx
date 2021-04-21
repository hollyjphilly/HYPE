import React from "react";
import showMapStyles from "../map_styles";
import { 
  Map, 
  GoogleApiWrapper, 
  InfoWindow, 
  Marker, 
} from 'google-maps-react';


class MapIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      selectedEvent: {},
      activeMarker: {},
      showingInfoWindow: false,
    };
    
    this.onMarkerClick = this.onMarkerClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllEvents();
  }

  onMarkerClick = (props, marker, e) => {
    ;
    this.setState({
      selectedEvent: props.item,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onClose = props => {
    
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  goToEvent(eventId) {
    this.props.history.push(`/events/${eventId}`); 
  }

  render() {
    const { events } = this.props;
    let { showingInfoWindow, activeMarker, selectedEvent } = this.state;
    
    return (
      <div className="map-index-container">
        <div className="map-index">

          <Map
            google={this.props.google}
            styles={showMapStyles}
            mapTypeControl={false}
            fullscreenControl={false}
            streetViewControl={false}
            zoom={11}
            initialCenter={{ lat: 40.672410, lng: -73.969861 }}
          >

            {events && events.map(item => {
                return (
                  <Marker 
                    key={item._id} 
                    position={{
                      lat: item.location[0],
                      lng: item.location[1],
                    }}
                    item={item}
                    onClick={this.onMarkerClick}
                  />
                )
              })
            }

            {<InfoWindow
                marker={activeMarker}
                visible={showingInfoWindow}
                onClose={this.onClose}
              >

                <div className="event-map-info-window-container" >

                  <a href={`#/events/${selectedEvent._id}`}>
                    <h1>
                      {selectedEvent.title}
                    </h1>
                  </a>

                  <h2>{`${new Date(
                      selectedEvent.dateTime
                    ).toDateString()} ${new Date(
                      selectedEvent.dateTime
                    ).toLocaleDateString("en-Us")}`}
                  </h2>

                </div>

              </InfoWindow>}

          </Map>

        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDVt-WmXfXrG4hDwxbM6Ctir_Q8e1VicE8'
})(MapIndex);
