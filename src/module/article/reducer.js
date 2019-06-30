import { combineReducers } from 'redux'
import addArticle from './AddArticle'
import articleList from './articleList'
import getArticle from './getArticle'





export default combineReducers({
    addArticle,
    articleList,
    getArticle,

})

