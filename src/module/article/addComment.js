import { handleActions } from 'redux-actions';
import * as types from '../actionTypes';

const initialState = {
    isLoading: false,
    error: null,
}

export default handleActions({
    [types.ADD_COMMENT_REQUEST]: (state) => Object.assign({}, state, { isLoading: true }),
    [types.ADD_COMMENT_SUCCESS]: (state) => Object.assign({}, state, { isLoading: false }),
    [types.ADD_COMMENT_FAILED]: (state, action) => Object.assign({}, state, { isLoading: false, error: action.payload })
}, initialState)