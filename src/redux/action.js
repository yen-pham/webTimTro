import {
    GET_MOTELS,
    GET_MOTELS_SUCCESS,
    GET_MOTELS_FAIL,
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

export const getMotelsAction = () => {
    return dispatch => {
        try {
            dispatch(getMotelsPendingAction());
            var motels = firebase.database().ref("motels/ads").orderByKey().startAt('0').limitToFirst(20);
            return motels.on('value', (data) => dispatch(getMotelsSuccessAction(data.val())))
        } catch (error) {
            dispatch(getMotelsFailAction(error));
        }
    };
};