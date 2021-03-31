import React from "react";

class CreateEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      // sport should be a dropdown menu
      sport: "",
      host: this.props.user.id,
      // set a max of a 100 min of 4
      maxCapacity: 0,
      // lat lng
      location: "",
      // calender and clock inputs / may require parsing
      dateTime: "2020-03-30T10:00:00.000+00:00",
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
          <header className="create-form-header">
            <h1 className="create-form-header-h1">Create an Event</h1>
          </header>

          <br />
          <input
            type="text"
            value={this.state.title}
            onChange={this.update("title")}
            placeholder="Title"
          />

          <br />
          <textarea
            type="text"
            value={this.state.description}
            onChange={this.update("description")}
            placeholder="Description"
          />

          <br />
          <input
            type="text"
            value={this.state.sport}
            onChange={this.update("sport")}
            placeholder="Sport"
          />

          <br />
          <input
            type="number"
            value={this.state.maxCapacity}
            onChange={this.update("maxCapacity")}
          />

          <br />
          <input
            type="text"
            value={this.state.location}
            onChange={this.update("location")}
            placeholder="Location"
          />

          <br />
          <input type="submit" value="Submit" />

          {this.renderErrors()}
        </form>
      </div>
    );
  }
}

export default CreateEvent;
