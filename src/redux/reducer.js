import {
    GET_MOTELS,
    GET_MOTELS_SUCCESS,
    GET_MOTELS_FAIL,
    GET_MOTEL_FAIL,
    GET_MOTEL_SUCCESS,
    GET_MOTEL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    REGISTER_ERROR,
    REGISTER,
    GET_REGIONS_FAIL,
    GET_REGIONS_SUCCESS,
} from "./constants";

const initialState = {
    motels: [],
    loading:false,
    motelDetail:{},
    curentUser: null,
    loginError: "",
    profile: null,
    registerError:null,
    registerSuccess:false,
    regions:{}

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
        // case GET_MOTEL:
        //     console.log(state);
        //     return {
        //         ...state,
        //         loading: true
        //     };
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
        case GET_REGIONS_SUCCESS:
            return {
                ...state,
                loading: false,
                regions: action.payload,
            };
        case GET_REGIONS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
    }
}

export default rootReducer;