import {
    GET_MOTELS,
    GET_MOTELS_SUCCESS,
    GET_MOTELS_FAIL,
    GET_MOTEL_FAIL,
    GET_MOTEL_SUCCESS,
    GET_MOTEL,
    GET_USER_FAIL,
    GET_USER_SUCCESS,
    GET_USER,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    REGISTER_ERROR,
    REGISTER,
} from "./constants";

const initialState = {
    motels: [],
    loading:true,
    motelDetail:{},
    curentUser: null,
    loginError: "",
    profile: {},
    registerError:null,
    registerSuccess:false

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
        case GET_USER:
            return {
                ...state,
                loading: true
            };
        case GET_USER_SUCCESS:
            console.log(action.payload);
            return {
                ...state,
                loading: false,
                userDetail: action.payload,
            };
        case GET_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case LOGIN_SUCCESS:
            // console.log(state);
            return {
                ...state,
                curentUser: action.payload,
                profile: Object.entries(action.payload)[2][1].profile
            };
        case LOGIN_FAIL:
            console.log(state);

            return {
                ...state,
                error: action.payload
            };
        case REGISTER_ERROR:
            console.log(state);
            console.log(action.payload.message);
            return {
                ...state,
                registerError: action.payload
            };
        case REGISTER:

            return {
                ...state,
                registerError:null,
                registerSuccess:true
            };
        case LOGOUT:
            return {
                ...state,
                curentUser:null,
                profile:null
            };

    }
}

export default rootReducer;