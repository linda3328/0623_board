import { combineReducers } from 'redux'
import addArticle from './AddArticle'
import articleList from './articleList'
export default combineReducers({
    addArticle,
    articleList,
})