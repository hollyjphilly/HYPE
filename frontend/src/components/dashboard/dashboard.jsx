import React from 'react';
import DashboardItem from './dashboard_item';
import AllEvents from "./all_events.jsx"
import HostingEvents from "./hosting_events.jsx"
import AttendingEvents from "./attending_events.jsx"
import { Switch, Route, Link } from "react-router-dom";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAttendingEvents(this.props.currentUser.id);
    this.props.fetchHostedEvents(this.props.currentUser.id);
  }

  render() {
    const { currentUser, hostedEvents, attendingEvents } = this.props;
    const dateObj = new Date(currentUser.date);

    if (!hostedEvents || !attendingEvents) {
      return null
    }

    return (<>

      <div className="events-green-bar"></div>
          <div className="events-wrapper">
            <div className="events-green-bar-text slide">
            <h1>Dashboard</h1>
          </div>
      </div>
      
      <div className="dashboard-container">        
      <div className="dashboard-content">        

        <div className="dashboard-events-container">

          <div className="dashboard-buttons">
            <Link to='/dashboard/all' className="dash-btn">All</Link>
            <Link to='/dashboard/hosting' className="dash-btn">Hosting</Link>
            <Link to='/dashboard/attending' className="dash-btn">Attending</Link>
          </div>

          <Switch>
            <Route exact path="/dashboard/all" component={AllEvents} />
            <Route exact path="/dashboard/hosting" component={HostingEvents} />
            <Route exact path="/dashboard/attending" component={AttendingEvents} />
            <Route path="/dashboard" component={AllEvents} />
          </Switch>

        </div>

        <div className="dashboard-profile">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-ninja" role="img" viewBox="0 0 448 512"><path fill="rgb(206,130,255)" d="M325.4 289.2L224 390.6 122.6 289.2C54 295.3 0 352.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-70.2-54-127.1-122.6-133.2zM32 192c27.3 0 51.8-11.5 69.2-29.7 15.1 53.9 64 93.7 122.8 93.7 70.7 0 128-57.3 128-128S294.7 0 224 0c-50.4 0-93.6 29.4-114.5 71.8C92.1 47.8 64 32 32 32c0 33.4 17.1 62.8 43.1 80-26 17.2-43.1 46.6-43.1 80zm144-96h96c17.7 0 32 14.3 32 32H144c0-17.7 14.3-32 32-32z"></path></svg>
          <p>{currentUser.firstName}</p>
          <p>{currentUser.lastName}</p>
          <p>{`Member since ${dateObj.getFullYear()}`}</p>
        </div>

      </div>
      </div>
    </>)

      {/* <div>
        {hostedEvents.map((event) => (
            <div>{event.title}</div>
          ))}
      </div> */}
  }
}

export default Dashboard;

   // if(allEvents.length) {
    //   return(
    //     <div className="no-events">
    //       <h3>You have not signed up to host or attend an event.</h3>
    //       <a href="/#/events" className="splash-button">Find Events</a>
    //     </div>
    //   )
    // }

    
  
    //       <DashboardItem event={event} key={`all-${idx}`}/>

    // const {hostedEvents, attendingEvents} = this.props;
    // let allEvents = hostedEvents.concat(attendingEvents);


  // renderHosted() {
  //   const {hostedEvents} = this.props;
  //   if (hostedEvents.length) {
  //     return(
  //       <div className="no-events">
  //         <h3>You are not hosting any events :(</h3>
  //       </div>
  //     )
  //   } else {
  //     return hostedEvents.map((event, idx) =>{
  //       return(
  //         <DashboardItem event={event} key={`hosted-${idx}`}/>
  //       )
  //     })
  //   }
  // }
  

  // renderAttending() {
  //   const {attendingEvents} = this.props;
  //   debugger
  //   if (attendingEvents.length) {
  //     return(
  //       <div className="no-events">
  //         <h3>You have not joined any events :(</h3>
  //       </div>
  //     )
  //   } else {
  //     return this.props.attendingEvents.map((event, idx) =>{
  //       return(
  //         <DashboardItem event={event} key={`attending-${idx}`}/>
  //       )
  //     })
  //   }
  // }

  // renderEvents(type) {
  //   return e => {
  //     if (type === "renderAll") {
  //       return this.renderAll();
  //     } else if (type === "renderHosted") {
  //       return this.renderHosted();
  //     } else if (type === "renderAttending") {
  //       return this.renderAttending();
  //     }
  //   }
  // }





