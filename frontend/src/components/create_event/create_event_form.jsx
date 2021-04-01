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
      // lat lng
      location: "444.44, 444.444",
      dateTime: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
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
          <header className="create-event-form-header">
            <h1 className="create-event-form-header-h1">Create an Event</h1>
          </header>
          <div className="create-event-form-inputs-container">
            <div className="create-event-input-div">
              <div className="create-event-input-text">
                <span className="create-event-input-span">Title</span>
              </div>
              <div className="create-event-title-input-div">
                <input
                  className="create-event-title-input"
                  type="text"
                  value={this.state.title}
                  onChange={this.update("title")}
                  // placeholder="Title"
                />
              </div>
            </div>
            <div className="create-event-input-div">
              <div className="create-event-input-text">
                <span className="create-event-input-span">
                  Please select a date and time
                </span>
              </div>
              <div className="create-event-date-input-div">
                <input
                  className="create-event-date-input"
                  type="datetime-local"
                  value={this.state.dateTime}
                  onChange={this.update("dateTime")}
                />
              </div>
            </div>
            <div className="create-event-two-input-div">
              <div className="create-event-capacity-div">
                <div className="create-event-capacity-text">
                  <span className="create-event-input-span">
                    Attendees (min. 4 max. 100)
                  </span>
                </div>
                <div className="create-event-capacity-input-div">
                  <input
                    className="create-event-capacity-input"
                    type="number"
                    min="4"
                    max="100"
                    onChange={this.update("maxCapacity")}
                  />
                </div>
              </div>
              <div className="create-event-sport-div">
                <div className="create-event-sport-text">
                  <span className="create-event-input-span">Sport</span>
                </div>
                <div className="create-event-sport-input-div">
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
                  </select>
                </div>
              </div>
            </div>
            <div className="create-event-input-div">
              <div className="create-event-input-text">
                <span className="create-event-input-span">
                  Describe your event
                </span>
              </div>
              <div className="create-event-description-textarea-div">
                <textarea
                  className="create-event-description-textarea"
                  type="text"
                  value={this.state.description}
                  onChange={this.update("description")}
                  // placeholder="Description"
                />
              </div>
            </div>
            <div className="create-event-input-div">
              <div className="create-event-input-text">
                <span className="create-event-input-span">
                  Please choose a location
                </span>
              </div>
              <div className="create-event-location-map-div">
                {/*  */}
                {/* <Search /> */}
                {/*  */}
              </div>
            </div>
          </div>
          <div className="create-event-form-button-container">
            <button className="create-event-button">Create Event</button>
          </div>

          {this.renderErrors()}
        </form>
      </div>
    );
  }
}

export default CreateEventForm;
