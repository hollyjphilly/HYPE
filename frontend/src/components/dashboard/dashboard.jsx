import React from "react";
import DashboardEvents from "./dashboard_events.jsx";
import { Switch, Route, NavLink } from "react-router-dom";
import Footer from "../footer";
import Avatar from "avataaars";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      topType: "",
      accessoriesType: "",
      hairColor: "",
      facialHairType: "",
      clotheType: "",
      eyeType: "",
      mouthType: "",
      skinColor: "",
    };
  }

  componentDidMount() {
    this.props.fetchAvatar().then((res) => {
      const {avatar} = res.currentUser;
        this.setState({
          topType: avatar.topType,
          accessoriesType: avatar.accessoriesType,
          hairColor: avatar.hairColor,
          facialHairType: avatar.facialHairType,
          clotheType: avatar.clotheType,
          eyeType: avatar.eyeType,
          mouthType: avatar.mouthType,
          skinColor: avatar.skinColor,
        });
    });
    const { id } = this.props.currentUser;
    this.props.fetchAttendingEvents(id);
    this.props.fetchHostedEvents(id);
  }

  toggleEditor = () => {
    this.setState({
      editing: !this.state.editing,
    });
  };

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  updateAvatar = () => {
    this.props
      .updateAvatar({
        email: this.props.currentUser.email,
        avatar: this.state,
      })
      .then(this.toggleEditor());
  };

  renderEditor = () => {
    return (
      <div id="editing-links">
        <div>
          <label>Skin Color</label>
          <select
            value={this.state.skinColor}
            onChange={this.update("skinColor")}
          >
            <option disabled={true}>Choose a skin color</option>
            <option value="Pale">Pale White</option>
            <option value="Light">White</option>
            <option value="Yellow">Yellow</option>
            <option value="Tanned">Orange Tan</option>
            <option value="Brown">Brown</option>
            <option value="DarkBrown">Dark Brown</option>
            <option value="Black">Black</option>
          </select>
        </div>
        <div>
          <label>Hair Style</label>
          <select value={this.state.topType} onChange={this.update("topType")}>
            <option disabled={true}>Choose a hair style</option>
            <option value="NoHair">NoHair</option>
            <option value="LongHairCurly">Long Hair Curly</option>
            <option value="LongHairCurvy">Long Hair Wavy</option>
            <option value="LongHairStraight">Long Hair Straight</option>
            <option value="LongHairStraight2">Long Hair Straight 2</option>
            <option value="LongHairBigHair">Long Hair BigHair</option>
            <option value="LongHairBob">Long Hair Bob</option>
            <option value="LongHairBun">Long Hair Bun</option>
            <option value="LongHairDreads">Long Hair Dreads</option>
            <option value="LongHairFro">Long Hair Fro</option>
            <option value="LongHairFroBand">Long Hair Fro Band</option>
            <option value="LongHairNotTooLong">Long Hair Not Too Long</option>
            <option value="LongHairShavedSides">Long Hair Shaved Sides</option>
            <option value="LongHairMiaWallace">Long Hair MiaWallace</option>
            <option value="LongHairStraightStrand">
              Long Hair Straight Strand
            </option>
            <option value="ShortHairShortCurly">Short Hair Curly</option>
            <option value="ShortHairShortFlat">Short Hair Flat</option>
            <option value="ShortHairShortRound">Short Hair Round</option>
            <option value="ShortHairShortWaved">Short Hair Waved</option>
            <option value="ShortHairFrizzle">Short Hair Just Top</option>
            <option value="ShortHairDreads01">Short Hair Dreads</option>
            <option value="ShortHairDreads02">Short Hair Dreads 2</option>
            <option value="ShortHairShaggyMullet">
              Short Hair Shaggy Mullet
            </option>
            <option value="ShortHairSides">Short Hair Sides</option>
            <option value="ShortHairTheCaesar">Short Hair The Caesar</option>
            <option value="Hijab">Hijab</option>
            <option value="Turban">Turban</option>
          </select>
        </div>
        <div>
          <label>Hair Color</label>
          <select
            value={this.state.hairColor}
            onChange={this.update("hairColor")}
          >
            <option disabled={true}>Choose a hair color</option>
            <option value="Auburn">Auburn</option>
            <option value="Black">Black</option>
            <option value="Blonde">Blonde</option>
            <option value="BlondeGolden">Blonde Golden</option>
            <option value="Brown">Brown</option>
            <option value="BrownDark">Brown Dark</option>
            <option value="PastelPink">Pastel Pink</option>
            <option value="Platinum">Platinum</option>
            <option value="Red">Red</option>
            <option value="SilverGray">Silver Gray</option>
          </select>
        </div>
        <div>
          <label>Facial Hair</label>
          <select
            value={this.state.facialHairType}
            onChange={this.update("facialHairType")}
          >
            <option disabled={true}>Choose facial hair</option>
            <option value="Blank">None</option>
            <option value="BeardMedium">Medium Beard</option>
            <option value="BeardLight">Light Beard</option>
            <option value="BeardMajestic">Beard Majestic</option>
            <option value="MoustacheFancy">Fancy Moustache</option>
            <option value="MoustacheMagnum">Magnum Moustache</option>
          </select>
        </div>
        <div>
          <label>Shirt Style</label>
          <select
            value={this.state.clotheType}
            onChange={this.update("clotheType")}
          >
            <option disabled={true}>Choose a shirt</option>
            <option value="Hoodie">Hoodie</option>
            <option value="ShirtCrewNeck">Crew Neck</option>
            <option value="ShirtVNeck">V Neck</option>
            <option value="ShirtScoopNeck">Scoop Neck</option>
            <option value="BlazerShirt">Blazer</option>
            <option value="BlazerSweater">Blazer & Sweater</option>
            <option value="CollarSweater">Collar & Sweater</option>
          </select>
        </div>
        <div>
          <label>Eyes</label>
          <select value={this.state.eyeType} onChange={this.update("eyeType")}>
            <option disabled={true}>Choose eye type</option>
            <option value="Close">Close</option>
            <option value="Cry">Cry</option>
            <option value="Default">Default</option>
            <option value="Dizzy">Dizzy</option>
            <option value="Happy">Happy</option>
            <option value="Hearts">Hearts</option>
            <option value="Side">Side</option>
            <option value="Squint">Squint</option>
            <option value="Surprised">Surprised</option>
            <option value="Wink">Wink</option>
            <option value="WinkWacky">WinkWacky</option>
          </select>
        </div>
        <div>
          <label>Glasses</label>
          <select
            value={this.state.accessoriesType}
            onChange={this.update("accessoriesType")}
          >
            <option disabled={true}>Choose eyewear</option>
            <option value="Blank">Blank</option>
            <option value="Kurt">Kurt</option>
            <option value="Prescription01">Prescription01</option>
            <option value="Prescription02">Prescription02</option>
            <option value="Round">Round</option>
            <option value="Sunglasses">Sunglasses</option>
            <option value="Wayfarers">Wayfarers</option>
          </select>
        </div>
        <div>
          <label>Mouth</label>
          <select
            value={this.state.mouthType}
            onChange={this.update("mouthType")}
          >
            <option disabled={true}>Choose a mouth type</option>
            <option value="Concerned">Concerned</option>
            <option value="Default">Default</option>
            <option value="Disbelief">Disbelief</option>
            <option value="Eating">Eating</option>
            <option value="Grimace">Grimace</option>
            <option value="Sad">Sad</option>
            <option value="ScreamOpen">ScreamOpen</option>
            <option value="Serious">Serious</option>
            <option value="Smile">Smile</option>
            <option value="Tongue">Tongue</option>
            <option value="Twinkle">Twinkle</option>
            <option value="Vomit">Vomit</option>
          </select>
        </div>
        <button onClick={this.updateAvatar} id="save-avatar-icon">
          Save Changes
        </button>
      </div>
    );
  };

  render() {
    const { currentUser, hostedEvents, attendingEvents, avatar, formType } = this.props;

    if (!hostedEvents || !attendingEvents || !avatar) {
      return null;
    }

    const allEvents = hostedEvents.concat(attendingEvents);
    const dateObj = new Date(currentUser.date);
    
    return (
      <div className="component-container">
        <div>
          <div className="events-green-bar"></div>
          <div className="events-wrapper">
            <div className="events-green-bar-text slide">
              <h1>Dashboard</h1>
            </div>
          </div>
          <div className="dashboard-container">
            <div className="dashboard-content">
              <div
                className="dashboard-profile"
                style={{
                  border: this.state.editing
                    ? "2px dashed rgb(117,117,115)"
                    : "2px solid transparent",
                  background: this.state.editing
                    ? "#efefef"
                    : `url("https://i.ibb.co/8KWx0hz/image-1.png") repeat-x fixed right bottom, #efd3ff`,
                  transition: "background 500ms",
                }}
              >
                <div id="db-profile-rows">
                  <div className="db-profile-top-row">
                    {this.state.editing ? (
                      <div
                        onClick={this.toggleEditor}
                        id="close-edit-avatar-icon"
                      >
                        &times;
                      </div>
                    ) : (
                      <svg
                        viewBox="0 0 576 512"
                        id="edit-avatar-icon"
                        onClick={this.toggleEditor}
                      >
                        <path
                          fill="hsl(280,76%,66%)"
                          d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"
                        ></path>
                      </svg>
                    )}
                  </div>

                  <div id="db-profile-content">
                    <div id="avatar-background">
                      {this.state.topType === "" ? (
                        ""
                      ) : (
                        <Avatar
                          avatarStyle="Transparent"
                          topType={this.state.topType}
                          accessoriesType={this.state.accessoriesType}
                          hairColor={this.state.hairColor}
                          facialHairType={this.state.facialHairType}
                          clotheType={this.state.clotheType}
                          clotheColor="Heather"
                          eyeType={this.state.eyeType}
                          eyebrowType="Default"
                          mouthType={this.state.mouthType}
                          skinColor={this.state.skinColor}
                        />
                      )}
                    </div>
                    <div className="user-details">
                      <p id="fullname">{`${currentUser.firstName} ${currentUser.lastName}`}</p>
                      <p id="username">{`${currentUser.username}`}</p>
                      <p id="member-since">{`Member since ${dateObj.getFullYear()}`}</p>
                    </div>
                  </div>
                  {this.state.editing ? this.renderEditor() : ""}
                </div>
              </div>
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
                    component={() => (
                      <DashboardEvents
                        dashEvents={allEvents}
                        history={this.props.history}
                        formType={formType}
                      />
                    )}
                  />

                  <Route
                    exact
                    path="/dashboard/hosting"
                    component={() => (
                      <DashboardEvents
                        dashEvents={hostedEvents}
                        history={this.props.history}
                        formType={formType}
                      />
                    )}
                  />

                  <Route
                    exact
                    path="/dashboard/attending"
                    component={() => (
                      <DashboardEvents
                        dashEvents={attendingEvents}
                        history={this.props.history}
                        formType={formType}
                      />
                    )}
                  />

                  <Route
                    path="/dashboard"
                    component={() => (
                      <DashboardEvents
                        dashEvents={allEvents}
                        history={this.props.history}
                        formType={formType}
                      />
                    )}
                  />
                </Switch>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-container">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Dashboard;
