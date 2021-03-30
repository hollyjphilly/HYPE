import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';

import NavBarContainer from './nav/navbar_container';

import Main from './main';
import LoginFormContainer from './sessionForm/login_form_container';
import RegisterFormContainer from './sessionForm/register_form_container';

import EventsIndexContainer from './events/events_index_container';
// import ProfileContainer from './users/profile_container';


const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={Main} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/register" component={RegisterFormContainer} />
      <ProtectedRoute exact path="/events" component={EventsIndexContainer} />

      {/* <ProtectedRoute exact path="/profile" component={ProfileContainer} /> */}
    </Switch>
  </div>
);

export default App;