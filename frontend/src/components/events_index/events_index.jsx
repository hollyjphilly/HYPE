import React from "react";
import EventItem from "./event_item";
// import { NavLink } from "react-router-dom";
import Footer from '../footer'

class EventsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {search: ""};
    this.renderEvents = this.renderEvents.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllEvents();
  }

  renderEvents() {
    let filteredEvents = this.props.events.filter(
      (event) => {
        return event.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );
    return filteredEvents.map((event) => (
      <EventItem event={event} key={event._id} />
    ));
  }

  updateSearch(event) {
    this.setState({search: event.target.value})
  }

  render() {
    return (
      <div className="some-container">
        <div className="other-container">
        <div className="events-green-bar"></div>
        <div className="events-wrapper">
          <div className="events-green-bar-text slide">
            <h1>Games</h1>
          </div>
        </div>

        <div className="browse-game-content">
          {/* <div className="events-bar-container"> */}
          <div className="search-bar">
            <input 
              type="text" 
              value={this.state.search} 
              onChange={this.updateSearch}
              className="search-input"
              placeholder="Find game..."
              />

              <svg 
                width="25px"
            	  viewBox="0 0 183.792 183.792" 
                xmlns="http://www.w3.org/2000/svg"
                >
                <path 
                  d="M54.734,9.053C39.12,18.067,27.95,32.624,23.284,50.039c-4.667,17.415-2.271,35.606,6.743,51.22
            	  c12.023,20.823,34.441,33.759,58.508,33.759c7.599,0,15.139-1.308,22.287-3.818l30.364,52.592l21.65-12.5l-30.359-52.583
            	  c10.255-8.774,17.638-20.411,21.207-33.73c4.666-17.415,2.27-35.605-6.744-51.22C134.918,12.936,112.499,0,88.433,0
            	  C76.645,0,64.992,3.13,54.734,9.053z M125.29,46.259c5.676,9.831,7.184,21.285,4.246,32.25c-2.938,10.965-9.971,20.13-19.802,25.806
            	  c-6.462,3.731-13.793,5.703-21.199,5.703c-15.163,0-29.286-8.146-36.857-21.259c-5.676-9.831-7.184-21.284-4.245-32.25
            	  c2.938-10.965,9.971-20.13,19.802-25.807C73.696,26.972,81.027,25,88.433,25C103.597,25,117.719,33.146,125.29,46.259z"/>

              </svg>
            </div>
            <div className="event-index-container">
              <div className="event-index-content">
                {this.props.events.length ? (
                  this.renderEvents()
                ) : (
                  <h2>Where did I put those damn events!?</h2>
                )}
              </div>
          </div>
          {/* </div> */}
        </div>
        </div>
        <div className="event-footer-container">
        <Footer />
        </div>

      </div>
    );
  }
}

export default EventsIndex;
