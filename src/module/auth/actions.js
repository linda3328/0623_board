import { createAction } from 'redux-actions';
import * as authAPI from '../../api/authAPI';
import * as types from '../actionTypes';


//로드인 유저 갱신
export const updateUser = createAction(types.UPDATE_USER)

/** 
 * 이메일 로그인 
 */

const signInWithEmailRequest = createAction(types.SIGN_IN_WITH_EMAIL_REQUEST)
const signInWithEmailSuccess = createAction(types.SIGN_IN_WITH_EMAIL_SUCCESS)
const signInWithEmailFailed = createAction(types.SIGN_IN_WITH_EMAIL_FAILED)

export const signInWithEmail = (email, password) => {
    return (dispatch) => {
        dispatch(signInWithEmailRequest());
        authAPI.signInWithEmail(email, password)
            .then(() => {
                dispatch(signInWithEmailSuccess())
            })
            .catch((error) => {
                dispatch(signInWithEmailFailed(error))
            })
    }
}


const signInWithFacebookRequest = createAction(types.SIGN_IN_WITH_FACEBOOK_REQUEST);
const signInWithFacebookSuccess = createAction(types.SIGN_IN_WITH_FACEBOOK_SUCCESS);
const signInWithFacebookFailed = createAction(types.SIGN_IN_WITH_FACEBOOK_FAILED);

export const signInWithFacebook = () => {
    return (dispatch) => {
        dispatch(signInWithFacebookRequest());
        authAPI.signInWithFacebook()
            .then(() => {
                dispatch(signInWithFacebookSuccess())
            })
            .catch((error) => {
                dispatch(signInWithFacebookFailed(error))
            })
    }
}


const signInWithGoogleRequest = createAction(types.SIGN_IN_WITH_GOOGLE_REQUEST);
const signInWithGoogleSuccess = createAction(types.SIGN_IN_WITH_GOOGLE_SUCCESS);
const signInWithGoogleFailed = createAction(types.SIGN_IN_WITH_GOOGLE_FAILED);
export const signInWithGoogle = () => {
    return (dispatch) => {
        dispatch(signInWithGoogleRequest());
        authAPI.signInWithGoogle()
            .then(() => {
                dispatch(signInWithGoogleSuccess())
            })
            .catch((error) => {
                dispatch(signInWithGoogleFailed(error))
            })
    }
}




//이메일 회원가입

const signUpWithEmailRequest = createAction(types.SIGN_UP_WITH_EMAIL_REQUEST)
const signUpWithEmailSuccess = createAction(types.SIGN_UP_WITH_EMAIL_SUCCESS)
const signUpWithEmailFailed = createAction(types.SIGN_UP_WITH_EMAIL_FAILED)

export const signUpWithEmail = (email, password) => {
    return (dispatch) => {
        dispatch(signUpWithEmailRequest());
        authAPI.signUpWithEmail(email, password)
            .then(() => {
                dispatch(signUpWithEmailSuccess())
            })
            .catch((error) => {
                dispatch(signUpWithEmailFailed(error))
            })
    }
}


//signout
const signOutRequest = createAction(types.SIGN_OUT_REQUEST)
const signOutSuccess = createAction(types.SIGN_OUT_SUCCESS)
const signOutFailed = createAction(types.SIGN_OUT_FAILED)

export const signOut = (email, password) => {
    return (dispatch) => {
        dispatch(signOutRequest());
        authAPI.signOut(email, password)
            .then(() => {
                dispatch(signOutSuccess())
            })
            .catch((error) => {
                dispatch(signOutFailed(error))
            })
    }
}