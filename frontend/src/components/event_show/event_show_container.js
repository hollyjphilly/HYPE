import {
  fetchOneEvent,
  addUserToEvent,
} from "../../actions/event_actions";
import {connect} from "react-redux";
import EventShow from './event_show'

const mapStateToProps = (state, ownProps) => {
  
  return {
    eventId: ownProps.match.params.event_id,
    events: state.entities.events,
    currentUser: state.session.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchOneEvent: (id) => dispatch(fetchOneEvent(id)),
    addUserToEvent: (id) => dispatch(addUserToEvent(id)),
    // remove user from event
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventShow)