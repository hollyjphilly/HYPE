import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'
import Dashboard from './dashboard'
import {
  fetchHostedEvents,
  fetchAttendingEvents
} from '../../actions/user_events_actions';

const mapStateToProps = state => {
  debugger
  return {
    hostedEvents: state.entities.userEvents.hostedEvents.data,
    attendingEvents: state.entities.userEvents.attendingEvents.data,
    currentUser: state.session.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchHostedEvents: userId => dispatch(fetchHostedEvents(userId)),
    fetchAttendingEvents: userId => dispatch(fetchAttendingEvents(userId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard))