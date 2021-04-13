import React from "react";
import DashboardEvents from "./dashboard_events.jsx";
import { Switch, Route, NavLink } from "react-router-dom";
import Footer from "../footer";
import Avatar from "avataaars";
import EditAvatarDropdown from "./avatar_editor";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topType: "LongHairCurvy",
      accessoriesType: "Blank",
      hairColor: "BlondeGolden",
      facialHairType: "Blank",
      clotheType: "Hoodie",
      clotheColor: "Heather",
      eyeType: "Happy",
      eyebrowType: "Default",
      mouthType: "Smile",
      skinColor: "Light",
    };
  }

  componentDidMount() {
    this.props.fetchAttendingEvents(this.props.currentUser.id);
    this.props.fetchHostedEvents(this.props.currentUser.id);
  }

  render() {
    const { currentUser, hostedEvents, attendingEvents } = this.props;

    if (!hostedEvents || !attendingEvents) {
      return null;
    }

    const allEvents = hostedEvents.concat(attendingEvents);
    const dateObj = new Date(currentUser.date);

    return (
      <>
        <div className="events-green-bar"></div>
        <div className="events-wrapper">
          <div className="events-green-bar-text slide">
            <h1>Dashboard</h1>
          </div>
        </div>

        <div className="dashboard-container">
          <div className="dashboard-content">
            <div className="dashboard-events-container">
              <div className="dashboard-buttons">
                <NavLink to="/dashboard/all" className="dash-btn">
                  All
                </NavLink>
                <NavLink to="/dashboard/hosting" className="dash-btn">
                  Hosting
                </NavLink>
                <NavLink to="/dashboard/attending" className="dash-btn">
                  Attending
                </NavLink>
              </div>

              <Switch>
                <Route
                  exact
                  path="/dashboard/all"
                  component={() => <DashboardEvents dashEvents={allEvents} />}
                />

                <Route
                  exact
                  path="/dashboard/hosting"
                  component={() => (
                    <DashboardEvents dashEvents={hostedEvents} />
                  )}
                />

                <Route
                  exact
                  path="/dashboard/attending"
                  component={() => (
                    <DashboardEvents dashEvents={attendingEvents} />
                  )}
                />

                <Route
                  path="/dashboard"
                  component={() => <DashboardEvents dashEvents={allEvents} />}
                />
              </Switch>
            </div>

            <div className="dashboard-profile">
              <div className="db-profile-top-row">
                <EditAvatarDropdown />
              </div>
              <Avatar
                avatarStyle="Circle"
                topType={this.state.topType}
                accessoriesType={this.state.accessoriesType}
                hairColor={this.state.hairColor}
                facialHairType={this.state.facialHairType}
                clotheType={this.state.clotheType}
                clotheColor={this.state.clotheColor}
                eyeType={this.state.eyeType}
                eyebrowType={this.state.eyebrowType}
                mouthType={this.state.mouthType}
                skinColor={this.state.skinColor}
              />
              <div className="user-details">
                <p>{`${currentUser.firstName} ${currentUser.lastName}`}</p>
                <p>{`Member since ${dateObj.getFullYear()}`}</p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default Dashboard;
