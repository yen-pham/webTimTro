import {
    GET_MOTELS,
    GET_MOTELS_SUCCESS,
    GET_MOTELS_FAIL,
    GET_MOTEL_SUCCESS,
    GET_MOTEL,
    GET_MOTEL_FAIL,
    LOGIN_SUCCESS,
    REGISTER,
    LOGIN_FAIL,
    REGISTER_ERROR
} from "./constants";
import firebase, { doCreateUserWithEmailAndPassword, doSignInWithEmailAndPassword, doSignInWithFacebook, signInWithGoogle } from '../connectFirebase/firebase.utils';
import { auth } from '../connectFirebase/firebase.utils';
import { LOGOUT } from "./constants";
import { GET_REGIONS_FAIL } from "./constants";
import { GET_REGIONS_SUCCESS } from "./constants";


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
export const loginSuccess = data => ({
    type: LOGIN_SUCCESS,
    payload: data
});
export const registerSuccess = () => ({
    type: REGISTER,
    // payload: data
});
export const registerError = error => ({
    type: REGISTER_ERROR,
    payload: error
});
export const loginFail = error => ({
    type: LOGIN_FAIL,
    payload: error
});

export const logout = () => ({
    type: LOGOUT,
});
export const getRegionsSuccessAction = data => ({
    type: GET_REGIONS_SUCCESS,
    payload: data
});

export const getRegionsFailAction = error => ({
    type: GET_REGIONS_FAIL,

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
export const unsubscribe =()=>{
    return dispatch =>  auth.onAuthStateChanged(user => 
        dispatch(loginSuccess(user))
      );
}
export const loginFaceAction = () => {
    return dispatch => {
        try {
            return  doSignInWithFacebook()
            .then(socialAuthUser => dispatch(loginSuccess(socialAuthUser)))
        } catch (error) {
            dispatch(loginFail(error));
        }
    };
}
export const registerAction = (email,password) => {
    return dispatch => {
        try {
            return doCreateUserWithEmailAndPassword(email,password).then(user=>{alert("Đăng nhập thành công !");registerSuccess()}).catch(error => {   
                switch(error.code) {
                  case 'auth/email-already-in-use':
                    dispatch(registerError('Email đã được sử dụng !'));
                    break;
                  case 'auth/weak-password':
                    dispatch(registerError('Mật khẩu nên có ít nhất 6 kí tự !'));
                        break;
               }
               
             })
        } catch (error) {
        }
    };
}
export const loginGoogleAction = () => {
    return dispatch => {
        try {
            return  signInWithGoogle()
            .then(socialAuthUser => dispatch(loginSuccess(socialAuthUser)))
        } catch (error) {
            dispatch(loginFail(error));
        }
    };
}
export const loginPassAction = (email, password) => {
    return dispatch => {
        try {
            return  doSignInWithEmailAndPassword(email, password).then(socialAuthUser => dispatch(loginSuccess(socialAuthUser)))
        } catch (error) {
            dispatch(loginFail(error));
        }
    };
}
// export const loginPassAction = () => {
// }
// doSignInWithEmailAndPassword(email, password).then(socialAuthUser => {console.log(socialAuthUser);})
export const getRegionsAction = () => {
    return dispatch => {
        try {
            var regions = firebase.database().ref("region");
            return regions.on('value', (data) => {dispatch(getRegionsSuccessAction(data.val()))})
        } catch (error) {
            dispatch(getRegionsFailAction(error));
        }
    };
};
export const postAction = (post) => {
firebase.database().ref("motel").push(post).then(()=> {return true}).error(()=> {return false});


};