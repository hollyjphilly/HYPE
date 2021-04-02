import { createEvent } from "../../actions/event_actions";
import { connect } from "react-redux";
import CreateEventModal from "./modal";

const mapStateToProps = (state) => {
  return {
    user: state.session.user,
    errors: state.errors.session,
    loggedIn: state.session.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createEvent: (newEvent) => dispatch(createEvent(newEvent)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateEventModal);
