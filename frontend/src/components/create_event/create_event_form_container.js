import { createEvent } from "../../actions/event_actions";
import { connect } from "react-redux";
import CreateEventForm from "./create_event_form";

const mapStateToProps = (state) => {
  return {
    user: state.session.user,
    errors: state.errors.session,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createEvent: (newEvent) => dispatch(createEvent(newEvent)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateEventForm);
