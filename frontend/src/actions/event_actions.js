import * as EventAPIUtil from '../util/event_api_util'

export const RECEIVE_ONE_EVENT = "RECEIVE_EVENT";
export const RECEIVE_ALL_EVENTS = "RECEIVE_ALL_EVENTS";
export const REMOVE_EVENT = "REMOVE_EVENT";
export const RECEIVE_EVENT_ERRORS = "RECEIVE_EVENT_ERRORS";
export const CLEAR_EVENT_ERRORS = "CLEAR_EVENT_ERRORS";

const receiveOneEvent = (event) => {
    return {
        type: RECEIVE_ONE_EVENT,
        event
    }
}

const receiveAllEvents = (events) => {
    return {
        type: RECEIVE_ALL_EVENTS,
        events
    }
}

const receiveErrors = (errors) => {
    return {
        type: RECEIVE_EVENT_ERRORS,
        errors
    }
}

export const clearErrors = () => {
    return {
        type: CLEAR_EVENT_ERRORS,
    }
}

export const fetchOneEvent = (eventId) => (dispatch) => {
    return (
        EventAPIUtil.fetchOneEvent(eventId)
            .then(
                (event) => dispatch(receiveOneEvent(event)),
                (errors) => {console.log(errors.responseText)}
            )
    )
}

export const fetchAllEvents = () => (dispatch) => {
    return (
        EventAPIUtil.fetchAllEvents()
            .then(
                (events) => dispatch(receiveAllEvents(events)),
                (errors) => {console.log(errors.responseText)}
            )
    )
}

export const createEvent = (formData) => (dispatch) => {
    return (
        EventAPIUtil.createEvent(formData)
            .then(
                (event) => dispatch(receiveOneEvent(event)),
                (errors) => dispatch(receiveErrors(errors.responseJSON))
            )
    )
}