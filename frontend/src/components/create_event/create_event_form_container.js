import { connect } from "react-redux";
import CreateEventForm from "./create_event_form";
import { createEvent, clearErrors } from "../../actions/event_actions";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    user: state.session.user,
    errors: Object.values(state.errors.events),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createEvent: (newEvent) => dispatch(createEvent(newEvent)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CreateEventForm)
);
