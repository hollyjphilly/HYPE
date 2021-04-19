import { createEvent } from "../../actions/event_actions";
import { connect } from "react-redux";
import CreateEventModal from "./modal";
import { withRouter } from "react-router-dom";

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

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CreateEventModal)
);
