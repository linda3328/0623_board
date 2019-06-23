import { combineReducers } from "redux";
import signOut from './common/signOut';
import signInWithEmail from './email/signInWithEmail'
import signUpWithEmail from './email/signUpWithEmail'
import signInWithFacebook from './facebook/signInWithFacebook'
import signInWithGoogle from './google/signInWithGoogle'
import user from './common/User'

export default combineReducers({
    signOut,
    signInWithEmail,
    signUpWithEmail,
    signInWithFacebook,
    signInWithGoogle,
    user,

})