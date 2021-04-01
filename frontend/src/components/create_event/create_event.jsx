import React from "react";
import CreateEventForm from "./create_event_form_container";
import MakeMap from "../../util/map";

class CreateEvent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="create-event-form-map-container">
        <CreateEventForm />
        <div className="create-event-map-container">
          <MakeMap />
        </div>
      </div>
    );
  }
}

export default CreateEvent;
