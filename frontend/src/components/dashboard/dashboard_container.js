import {connect} from 'react-redux';
import Dashboard from './dashboard';
// import {fetchUserEvents} from '../../actions/userEvents';

const mapStateToProps = (state) => {
  return {
    UserEvent: state.session.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    UserEvent: state.session.user
  }
}