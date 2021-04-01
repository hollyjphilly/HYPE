import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './navbar';
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => {
  return {
    loggedIn: state.session.isAuthenticated
  }
};

export default withRouter(connect(mapStateToProps, { logout })(NavBar));