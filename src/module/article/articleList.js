import { handleActions } from 'redux-actions';
import * as types from '../actionTypes';

const initialState = {
    isLoading: false,
    error: null,
    list: [],

}

export default handleActions({
    [types.GET_ARTICLE_LIST_REQUEST]: (state) => Object.assign({}, state, { isLoading: true }),
    [types.GET_ARTICLE_LIST_SUCCESS]: (state, action) => {

        const { list, isConcat } = action.payload;
        const newList = isConcat ? [...state.list, ...list] : [...list];
        return Object.assign({}, state, {
            isLoading: false,
            list: newList,
        })
    },
    [types.GET_ARTICLE_LIST_FAILED]: (state, action) => Object.assign({}, state, { isLoading: false, error: action.payload })
}, initialState)