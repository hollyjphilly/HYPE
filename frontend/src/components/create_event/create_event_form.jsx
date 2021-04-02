import React from "react";

class CreateEventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      sport: "",
      host: this.props.user.id,
      maxCapacity: 4,
      location: [this.props.lat, this.props.lng],
      dateTime: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.state.location = [this.props.lat, this.props.lng];
    this.props.createEvent(this.state);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.props.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.props.errors[error]}</li>
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
            <label id="create-label">Date</label>
            <input
              id="create-text"
              type="datetime-local"
              value={this.state.dateTime}
              onChange={this.update("dateTime")}
              />
          </div>

          <div className="create-input">
            <label id="create-label">Maximum Number of Players</label>
            <input
              id="create-text"
              type="number"
              min="4"
              max="100"
              placeHolder="Enter a number between 4 and 100"
              onChange={this.update("maxCapacity")}
            />
          </div>
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

          <div className="create-input textarea">
            <label id="create-label">Description</label>
            <textarea
              className="create-event-description-textarea"
              id="create-text"
              type="text"
              value={this.state.description}
              onChange={this.update("description")}
            />
          </div>
              
          <div className="create-event-location-map-div"></div>

          <div className="create-event-form-button-container">
            <button className="create-event-button" onClick={this.handleSubmit}>Create Event</button>
          </div>

          {this.renderErrors()}
        </form>
      </div>
    );
  }
}

export default CreateEventForm;
