import {
    GET_MOTELS,
    GET_MOTELS_SUCCESS,
    GET_MOTELS_FAIL,
    GET_MOTEL_SUCCESS,
    GET_MOTEL,
    GET_MOTEL_FAIL,
} from "./constants";
import firebase from '../connectFirebase/firebase.utils';


export const getMotelsPendingAction = () => ({
    type: GET_MOTELS
});

export const getMotelsSuccessAction = data => ({
    type: GET_MOTELS_SUCCESS,
    payload: data
});

export const getMotelsFailAction = error => ({
    type: GET_MOTELS_FAIL,
    payload: error
});
export const getMotelPendingAction = () => ({
    type: GET_MOTEL
});

export const getMotelSuccessAction = data => ({
    type: GET_MOTEL_SUCCESS,
    payload: data
});

export const getMotelFailAction = error => ({
    type: GET_MOTEL_FAIL,

    payload: error
});

export const getMotelsAction = () => {
    return dispatch => {
        try {
            dispatch(getMotelsPendingAction());
            var motels = firebase.database().ref("motel");
            return motels.on('value', (data) => dispatch(getMotelsSuccessAction(data.val())))
        } catch (error) {
            dispatch(getMotelsFailAction(error));
        }
    };
};
export const getMotelAction = (id) => {
    return dispatch => {
        try {
            dispatch(getMotelPendingAction());
            var motels = firebase.database().ref("motel/"+id);
            return motels.on('value', (data) => dispatch(getMotelSuccessAction(data.val())))
        } catch (error) {
            dispatch(getMotelFailAction(error));
        }
    };
};