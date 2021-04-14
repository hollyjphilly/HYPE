import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";

import NavBarContainer from "./nav/navbar_container";

import Main from "./main";
import LoginFormContainer from "./sessionForm/login_form_container";
import RegisterFormContainer from "./sessionForm/register_form_container";
import EventsIndexContainer from "./events_index/events_index_container";
import EventShowContainer from "./event_show/event_show_container";
import CreateEvent from "./create_event/create_event_form_container";
import DashboardContainer from "./dashboard/dashboard_container";
import MapIndexContainer from "./map_index/map_index_container";

const App = () => (
  <div className="app">
    <NavBarContainer />

    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/register" component={RegisterFormContainer} />
      <Route exact path="/events" component={EventsIndexContainer} />
      <Route exact path="/events/map" component={MapIndexContainer} />
      <Route exact path="/events/:event_id" component={EventShowContainer} />
      <ProtectedRoute exact path="/newevent" component={CreateEvent} />
      <ProtectedRoute path="/dashboard" component={DashboardContainer} />
      <Route path="/" component={Main} />
    </Switch>
  </div>
);

export default App;
