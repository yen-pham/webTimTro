import {
    GET_MOTELS,
    GET_MOTELS_SUCCESS,
    GET_MOTELS_FAIL,
    GET_MOTEL_FAIL,
    GET_MOTEL_SUCCESS,
    GET_MOTEL,
} from "./constants";

const initialState = {
    motels: [],
    loading:true,
    motelDetail:{},
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_MOTELS:
            // console.log(state);
            return {
                ...state,
                loading: true
            };
        case GET_MOTELS_SUCCESS:
            // console.log(action.payload);
            return {
                ...state,
                loading: false,
                motels: action.payload,
            };
        case GET_MOTELS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case GET_MOTEL:
            console.log(state);
            return {
                ...state,
                loading: true
            };
        case GET_MOTEL_SUCCESS:
            console.log(action.payload);
            return {
                ...state,
                loading: false,
                motelDetail: action.payload,
            };
        case GET_MOTEL_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

    }
}

export default rootReducer;