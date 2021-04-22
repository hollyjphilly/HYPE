import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'
import Dashboard from './dashboard'
import { fetchHostedEvents, fetchAttendingEvents } from '../../actions/user_events_actions';
import { updateAvatar, fetchAvatar } from '../../actions/avatar_actions';

const mapStateToProps = state => {
  
  return {
    hostedEvents: state.entities.userEvents.hostedEvents.data,
    attendingEvents: state.entities.userEvents.attendingEvents.data,
    currentUser: state.session.user,
    avatar: state.entities.avatar.avatar,
    formType: "dashboardForm"
  }
}

const mapDispatchToProps = dispatch => {
  
  return {
    fetchHostedEvents: userId => dispatch(fetchHostedEvents(userId)),
    fetchAttendingEvents: userId => dispatch(fetchAttendingEvents(userId)),
    updateAvatar: userData => dispatch(updateAvatar(userData)),
    fetchAvatar: () => dispatch(fetchAvatar())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard))