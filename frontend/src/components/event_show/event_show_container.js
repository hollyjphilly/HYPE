import {fetchOneEvent} from "../../actions/event_actions";
import {connect} from "react-redux";
import EventShow from './event_show'

const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
    // ARE WE GETTING IT FROM THE NEW SLICE OF STATE OR ???
    eventId: ownProps.match.params.event_id,
    event: state.entities.events,
    currentUser: state.session.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchOneEvent: (id) => dispatch(fetchOneEvent(id)),
    // NEED ACTION TO ADD CURRENTUSER TO THIS EVENT
    // add user to attending list: "PUT REQUEST" "api/events/:event_id" {usersAttending: currentUser._id}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventShow)