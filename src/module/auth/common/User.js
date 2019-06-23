import { handleActions } from 'redux-actions'
import * as types from '../../actionTypes'
const initialState = null;

export default handleActions({
    [types.UPDATE_USER]: (state, action) => action.payload
}, initialState)