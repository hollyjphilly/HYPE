import { fetchAllEvents } from "../../actions/event_actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import MapIndex from "./map_index";

const mapStateToProps = (state) => {
  return {
    events: state.entities.events,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllEvents: () => dispatch(fetchAllEvents()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MapIndex));