import { fetchAllEvents } from '../../actions/event_actions';
import {connect} from 'react-redux';
import EventsIndex from './events_index'


const mapStateToProps = state => {
  debugger
  return {
    events: Object.values(state.entities.events.all)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllEvents: () => dispatch(fetchAllEvents())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);