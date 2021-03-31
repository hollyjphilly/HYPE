import {connect} from 'react-redux';
import Dashboard from './dashboard'
import {
  fetchHostEvents,
  fetchAttendingEvents
} from '../../util/user_events';

const mapStateToProps = state => {
  return {
    hostedEvents: state.entities.userEvents.hostedEvents,
    attendingEvents: state.entities.userEvents.attendingEvents,
    currentUser: state.session.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchHostEvents: userId => dispatch(fetchHostEvents(userId)),
    fetchAttendingEvents: userId => dispatch(fetchAttendingEvents(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)