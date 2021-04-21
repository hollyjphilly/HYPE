import * as EventAPIUtil from "../util/event_api_util";

export const RECEIVE_ONE_EVENT = "RECEIVE_ONE_EVENT";
export const RECEIVE_ALL_EVENTS = "RECEIVE_ALL_EVENTS";
export const RECEIVE_EVENT_ERRORS = "RECEIVE_EVENT_ERRORS";
export const CLEAR_EVENT_ERRORS = "CLEAR_EVENT_ERRORS";
// export const REMOVE_EVENT = "REMOVE_EVENT";

const receiveOneEvent = (event) => {
  return {
    type: RECEIVE_ONE_EVENT,
    event,
  };
};

const receiveAllEvents = (events) => {
  return {
    type: RECEIVE_ALL_EVENTS,
    events,
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_EVENT_ERRORS,
    errors,
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_EVENT_ERRORS,
  };
};

export const fetchOneEvent = (eventId) => (dispatch) => {
  return EventAPIUtil.getOneEvent(eventId).then(
    (event) => dispatch(receiveOneEvent(event)),
    (errors) => {
      console.log(errors.responseText);
    }
  );
};

export const fetchAllEvents = () => (dispatch) => {
  return EventAPIUtil.getAllEvents().then(
    (events) => dispatch(receiveAllEvents(events)),
    (errors) => dispatch(receiveErrors(errors.response.data))
  );
};

export const createEvent = (formData) => (dispatch) => {
  return EventAPIUtil.postEvent(formData).then(
    (event) => dispatch(receiveOneEvent(event)),
    (errors) => dispatch(receiveErrors(errors.response.data))
  );
};

export const addUserToEvent = (eventId, data) => (dispatch) => {
  return EventAPIUtil.addUserToEvent(eventId, data).then(
    (event) => dispatch(receiveOneEvent(event)),
    (errors) => dispatch(receiveErrors(errors.response.data))
  );
};

export const removeUserFromEvent = (eventId, data) => (dispatch) => {
  return EventAPIUtil.removeUserFromEvent(eventId, data).then(
    (event) => dispatch(receiveOneEvent(event)),
    (errors) => dispatch(receiveErrors(errors.response.data))
  );
};
