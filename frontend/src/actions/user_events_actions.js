import * as EventAPIUtil from "../util/user_events_api_util";

export const RECEIVE_HOSTED_EVENTS = "RECEIVE_HOSTED_EVENTS";
export const RECEIVE_ATTENDING_EVENTS = "RECEIVE_ATTENDING_EVENTS";

const receiveHostedEvents = (hostedEvents) => {
  return {
    type: RECEIVE_HOSTED_EVENTS,
    hostedEvents,
  };
};

const receiveAttendingEvents = (attendingEvents) => {
  return {
    type: RECEIVE_ATTENDING_EVENTS,
    attendingEvents,
  };
};

export const fetchHostedEvents = (userId) => (dispatch) => {
  return EventAPIUtil.getHostEvents(userId).then(
    (event) => dispatch(receiveHostedEvents(event)),
    (errors) => {
      console.log(errors.responseText);
    }
  );
};

export const fetchAttendingEvents = (userId) => (dispatch) => {
  return EventAPIUtil.getAttendingEvents(userId).then(
    (event) => dispatch(receiveAttendingEvents(event)),
    (errors) => {
      console.log(errors.responseText);
    }
  );
};


