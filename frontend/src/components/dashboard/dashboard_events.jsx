import React, { Component } from 'react';
import EventItem from '../events_index/event_item';

export default class DashboardEvents extends Component {
    render() {
        
        // let sortedEvents = dashEvents.sort()
        return (
            <div className="dashboard-events">
                {this.props.dashEvents.map(event => (
                    <div className="dash-event-item">
                        <EventItem event={event} key={event._id}/>
                    </div>
                ))}
            </div>
        )
    }
}
