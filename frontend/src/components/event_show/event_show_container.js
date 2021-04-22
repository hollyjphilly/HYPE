import {
  fetchOneEvent,
  addUserToEvent,
  removeUserFromEvent,
  deleteEvent,
} from "../../actions/event_actions";
import { connect } from "react-redux";
import EventShow from "./event_show";

const mapStateToProps = (state, ownProps) => {
  return {
    eventId: ownProps.match.params.event_id,
    events: state.entities.events,
    currentUser: state.session.user,
    loggedIn: state.session.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOneEvent: (id) => dispatch(fetchOneEvent(id)),
    addUserToEvent: (eventId, data) => dispatch(addUserToEvent(eventId, data)),
    removeUserFromEvent: (eventId, data) =>
      dispatch(removeUserFromEvent(eventId, data)),
    deleteEvent: (eventId) => dispatch(deleteEvent(eventId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventShow);
