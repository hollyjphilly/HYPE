import React from 'react';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      all: false,
      hosted: false,
      attending: false,
      loading: true
    };
    this.renderAll = this.renderAll.bind(this);
    this.renderHosting = this.renderHosting.bind(this);
    this.renderAttending = this.renderAttending.bind(this);
  }

  renderLoading() {

  }

  renderAll() {

  }

  renderHosted() {

  }

  renderAttending() {

  }

  componentDidMount() {
    this.props.fetchAttendingEvents(this.props.currentUser._id);
    this.props.fetchHostEvents(this.props.currentUser._id);
  }

  render() {
    const {all, hosted, loading} = this.state;
    const renderEvents = loading ? this.renderloading() : all ? this.renderAll() : hosted ? this.renderHosted() : this.renderAttending();
    return(
      <div className="dashboard-container">
        <div className="dashboard-event-buttons">
          <button onClick={this.renderAll}>All</button>
          <button onClick={this.renderHosting}>Hosting</button>
          <button onClick={this.renderAttending}>Attending</button>
        </div>
        <div className="dashboard-events-container">
          <div className="dashboard-upcoming-container">
            {renderEvents}
          </div>
          <div className="dashboard-past-container">
            past events
          </div>
        </div>
        <div className="dashboard-profile">

        </div>

      </div>
    )
  }
}

export default Dashboard;