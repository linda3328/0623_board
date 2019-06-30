import { handleActions } from 'redux-actions';
import * as types from '../actionTypes';

const initialState = {
    isLoading: false,
    error: null,
    article: null,

}

export default handleActions({
    [types.GET_ARTICLE_REQUEST]: (state) => Object.assign({}, state, { isLoading: true }),
    [types.GET_ARTICLE_SUCCESS]: (state, action) => {
        const doc = action.payload;
        const article = doc.data();
        return Object.assign({}, state, { isLoading: false, article: article, })
    },
    [types.GET_ARTICLE_LIST_FAILED]: (state, action) => Object.assign({}, state, { isLoading: false, error: action.payload })
}, initialState)