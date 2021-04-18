import React from "react";

class CreateEventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      host: this.props.user.id,
      maxCapacity: 4,
      // location: "",
      dateTime: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.createEvent(this.state).then((data) => {
      if (data.type != "RECEIVE_EVENT_ERRORS") {
        this.props.hidden(true);
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

  render() {
    return (
      <div className="event-form-main-div">
        <div className="event-form-container">
          <form className="event-form" onSubmit={this.handleSubmit}>
            <div className="event-input-wrapper">
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
              <label className="create-label">When</label>
              <input
                className="event-input"
                type="datetime-local"
                value={this.state.dateTime}
                onChange={this.update("dateTime")}
              />
            </div>

            <div className="event-input-wrapper">
              <label className="create-label">Where</label>
              <input
                className="event-input"
                type="text"
                value={this.state.location}
                placeholder="Type an address"
                onChange={this.update("location")}
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

export default CreateEventForm;
