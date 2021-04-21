import React from "react";
import { GoogleApiWrapper } from "google-maps-react";

class CreateEventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      host: this.props.user.id,
      maxCapacity: 4,
      location: "",
      address: "",
      date: "",
      time: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  handleSubmit(e) {

    e.preventDefault();

    // handle wihtout address
    if (this.state.address === "") {
      this.props.createEvent(
        Object.assign({}, this.state, {
          dateTime: `${this.state.date}T${this.state.time}`,
        })
      );

      // handle with address
    } else {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode(
        { address: this.state.address.split(", ").join("%20") },
        (results, status) => {
          if (status === "OK") {
            const newLocation = [
              results[0].geometry.location.lat(),
              results[0].geometry.location.lng(),
            ];
            this.props
              .createEvent(
                Object.assign(
                  {},
                  this.state,
                  { location: newLocation },
                  { dateTime: `${this.state.date}T${this.state.time}` },
                { imgUrl: this.randomImage()}
                )
              )
              .then((res) => {
                if (res.type != "RECEIVE_EVENT_ERRORS") {
                  this.props.hidden(true);
                  this.props.history.push(`/events/${res.event.data._id}`);
                }
              });
          }
        }
      );
    }
  }

  randomImage() {
    const images = [
      "https://drive.google.com/thumbnail?id=1X0mrB_2k2oD8h95jJo2duW-a4ykfzAbc",
      "https://drive.google.com/thumbnail?id=1pfsY_EhDkKQyK5eWXtkpBVbValwIFHLH"
    ];

    const idx = Math.floor(Math.random() * images.length);
    return images[idx];
  }

  update(field) {
    return (e) =>

      this.setState({
        [field]: e.currentTarget.value,
      });
    };
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error) => (
          <li className="errors" key={error.id}>
            <svg className="errors-icon" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
            </svg>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  componentDidMount() {
    const autocomplete = new window.google.maps.places.Autocomplete(
      document.getElementById("autocomplete")
    );
    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      this.setState({
        address: `${place.name}, ${place.formatted_address}`,
      });
    });
  }

  render() {
    return (
      <div className="modal-body">
        <div className="event-form-container">
          <form className="event-form" onSubmit={this.handleSubmit}>
            <div className="event-input-wrapper">
              {/* </div> */}
              <label className="create-label">Title</label>
              <input
                autoFocus
                className="event-input"
                type="text"
                value={this.state.title}
                placeholder="What are you playing?"
                onChange={this.update("title")}
              />
            </div>

            <div className="event-input-wrapper">
              <label className="create-label">Where</label>
              <input
                id="autocomplete"
                autoComplete="on"
                className="event-input"
                type="text"
                placeholder="Enter an address"
                value={this.state.address}
                onChange={this.update("address")}
              />
            </div>

            <div className="event-input-wrapper">
              <label className="create-label">When</label>
              <input
                className="event-input"
                type="date"
                value={this.state.date}
                onChange={this.update("date")}
              />
              &nbsp; &nbsp;
              <input
                className="event-input"
                type="time"
                value={this.state.time}
                onChange={this.update("time")}
              />
            </div>

            <div className="event-input-wrapper" id="max-cap-wrapper">
              <label className="create-label">How many people can play?</label>
              <input
                className="event-input"
                type="number"
                min="4"
                max="100"
                placeholder="Enter a number between 4 and 100"
                onChange={this.update("maxCapacity")}
              />
            </div>

            <div className="event-input-wrapper" id="description-wrapper">
              <label className="create-label">Description</label>
              <textarea
                className="event-input"
                type="text"
                value={this.state.description}
                onChange={this.update("description")}
              />
            </div>
            <div className="errors-container">{this.renderErrors()}</div>
            <div id="submit-event-btn-wrapper">
              <button id="submit-event-btn" onClick={this.handleSubmit}>
                Create Event
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDVt-WmXfXrG4hDwxbM6Ctir_Q8e1VicE8",
})(CreateEventForm);
