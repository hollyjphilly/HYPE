import React from "react";

class CreateEventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      host: this.props.user.id,
      maxCapacity: 4,
      location: [this.props.lat, this.props.lng],
      locationTest: "",
      dateTime: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    // this.state.location = [this.props.lat, this.props.lng];

    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ 'address': this.state.locationTest.split(" ").join("%20")}, (results, status) => {
      if (status == 'OK') {
        this.props.createEvent(
          Object.assign(
            this.state, {
              location: [results[0].geometry.location.lat(), 
                        results[0].geometry.location.lng()]
            }
          )
        );
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error) => (
          <li className="errors" key={error.id}><svg className="errors-icon" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z">
          </path></svg>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="create-event-form-container">
        <form className="create-event-form" onSubmit={this.handleSubmit}>

          <div className="create-input">
            <label id="create-label">Title</label>
            <input
              autoFocus
              id="create-text"
              type="text"
              value={this.state.title}
              placeholder="What are you playing?"
              onChange={this.update('title')}/>
          </div>

          <div className="create-input">
            <label id="create-label">When</label>
            <input
              id="create-text"
              type="datetime-local"
              value={this.state.dateTime}
              onChange={this.update("dateTime")}
              />
          </div>

          <div className="create-input">
            <label id="create-label">Where</label>
            <input
              id="create-text"
              type="text"
              value={this.state.locationTest}
              placeholder="Type an address"
              onChange={this.update("locationTest")}/>
          </div>

          <div className="create-input" id="max-cap-wrapper">
            <label id="create-label">How many people can play?</label>
            <input
              id="create-text"
              type="number"
              min="4"
              max="100"
              placeholder="Enter a number between 4 and 100"
              onChange={this.update("maxCapacity")}
            />
          </div>

          <div className="create-input" id="description-wrapper">
            <label id="create-label">Description</label>
            <textarea
              className="create-event-description-textarea"
              id="create-text"
              type="text"
              value={this.state.description}
              onChange={this.update("description")}
              />
          </div>

          <div className="errors-container">{this.renderErrors()}</div>
              
          <div className="create-event-location-map-div"></div>

          <div className="create-event-form-button-container">
            <button className="create-event-button" onClick={this.handleSubmit}>Create Event</button>
          </div>

        </form>
      </div>
    );
  }
}

export default CreateEventForm;

{/* <span className="create-event-input-span">Sport</span>
<select
  className="create-event-sport-dropdown"
  value={this.state.sport}
  onChange={this.update("sport")}
>
  <option defaultValue="selected">
    Please select a sport
  </option>
  <option value="soccer">Soccer</option>
  <option value="basketball">Basketball</option>
  <option value="dodgeball">Dodgeball</option>
  <option value="waterballoonfight">
    Water Balloon Fight
  </option>
  <option value="hidenseek">Hide-n-Seek</option>
  <option value="freezetag">Freeze Tag</option>
</select> */}