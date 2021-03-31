import React from 'react';
import DashboardItem from './dashboard_item';

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
    return (
      <div className="dashboard-loading">
        Loading/click on a button
      </div>
    )
  }

  renderAll() {
    const {hostedEvents, attendingEvents} = this.props;
    let allEvents = hostedEvents.concat(attendingEvents);
    this.setState({all: true,
      hosted: false,
      attending: false,
      loading: false
    });
    return allEvents.map((event, idx) =>{
      return(
        <DashboardItem event={event} key={`all-${idx}`}/>
      )
    })
  }

  renderHosted() {
    this.setState({all: false,
      hosted: true,
      attending: false,
      loading: false
    });
    return this.props.hostedEvents.map((event, idx) =>{
      return(
        <DashboardItem event={event} key={`hosted-${idx}`}/>
      )
    })
  }
  

  renderAttending() {
    this.setState({all: false,
      hosted: false,
      attending: true,
      loading: false
    });
    return this.props.attendingEvents.map((event, idx) =>{
      return(
        <DashboardItem event={event} key={`attending-${idx}`}/>
      )
    })
  }

  componentDidMount() {
    this.props.fetchAttendingEvents(this.props.currentUser._id);
    this.props.fetchHostEvents(this.props.currentUser._id);
  }

  render() {
    const {all, hosted, loading} = this.state;
    const {currentUser} = this.props;
    const renderEvents = loading ? this.renderloading() : all ? this.renderAll() : hosted ? this.renderHosted() : this.renderAttending();
    const dateObj = new Date(currentUser.date);
    return(
      <div className="dashboard-container">
        <div className="dashboard-event-buttons">
          <button onClick={this.renderAll}>All</button>
          <button onClick={this.renderHosting}>Hosting</button>
          <button onClick={this.renderAttending}>Attending</button>
        </div>
        <div className="dashboard-events-container">
          <div className="dashboard-upcoming-container">
            <h2>Upcoming Events</h2>
            {renderEvents}
          </div>
          <div className="dashboard-past-container">
            <h2>Past Events</h2>
          </div>
        </div>
        <div className="dashboard-profile">
          <img src="" alt=""/>
          <p>{currentUser.firstName}</p>
          <p>{currentUser.lastName}</p>
          <p>{`Member since ${dateObj.getFullYear()}`}</p>
          <p></p>
        </div>

      </div>
    )
  }
}

export default Dashboard;