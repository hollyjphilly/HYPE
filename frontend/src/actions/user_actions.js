import * as APIUtil from '../util/user_api_util';

export const RECEIVE_HOSTED_EVENT = "RECEIVE_HOSTED_EVENT";
export const RECEIVE_ATTENDING_EVENT = "RECEIVE_ATTENDING_EVENT";

const receiveHostedEvent = hostedEvent => {
    return {
        type: RECEIVE_HOSTED_EVENT,
        hostedEvent
    }
};

const receiveAttendingEvent = attendingEvent => {
    return {
        type: RECEIVE_ATTENDING_EVENT,
        attendingEvent
    }  
};

export const fetchHostedEvents = userId => dispatch => (
    APIUtil.getUserEventHosting(userId)
        .then(
            (hostEvents) => dispatch(receiveHostedEvent(hostEvents)),
            (err) => dispatch(receiveErrors(err.response.data))
        )
);


export const fetchAttendingEvents = userId => dispatch => (
    APIUtil.getUserEventAttending(userId)
        .then(
            (attendingEvent) => dispatch(receiveAttendingEvent(attendingEvent)),
            (err) => dispatch(receiveErrors(err.response.data))
        )
);