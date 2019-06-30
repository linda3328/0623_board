import { combineReducers } from 'redux'
import addArticle from './AddArticle'
import articleList from './articleList'
import getArticle from './getArticle'
import getCommentList from './getCommentList'
import addComment from './addComment'



export default combineReducers({
    addArticle,
    articleList,
    getArticle,
    getCommentList,
    addComment,

})

