import { connect } from "react-redux";
import CreateEventForm from "./create_event_form";
import { createEvent, clearErrors } from "../../actions/event_actions";

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

export default connect(mapStateToProps, mapDispatchToProps)(CreateEventForm);
