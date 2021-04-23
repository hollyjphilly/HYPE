import React, { Component } from "react";
import EventItem from "../events_index/event_item";

export default class DashboardEvents extends Component {
  render() {
    return (
      <div className="dashboard-events">
        {this.props.dashEvents.map((event) => (
          <div className="dash-event-item">
            <EventItem
              event={event}
              key={event._id}
              history={this.props.history}
              formType={this.props.formType}
            />
          </div>
        ))}
      </div>
    );
  }
}
