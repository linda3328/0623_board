import React, { Component } from 'react';
// import styled from 'styled-components';
import ArticleItem from './ArticleItem'
import { Loader } from 'semantic-ui-react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as articleActions from '../../module/article/actions'


class Article extends Component {

    static defaultProps = {
        id: null,
        article: null,
    }

    componentDidMount() {

        if (this.props.id) {
            this.props.articleActions.getArticle(this.props.id);
        }

    }
    render() {

        const {
            article,
        } = this.props;

        console.log(this.props.id)


        return article ? (
            <ArticleItem
                id={article.id}
                downloadUrl={article.downloadUrl}
                content={article.content}
                commentCnt={article.commentCnt}
                likeCnt={article.likeCnt}
                createdAt={article.createdAt}
                updatedAt={article.updatedAt}
                userDisplayName={article.userDisplayName}
                userId={article.userId}
                userProfileUrl={article.userProfileUrl}
                onClick={article.onItemClick}
            />
        ) : (
                <Loader active />
            )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.article.getArticle.isLoading,
        error: state.article.getArticle.error,
        article: state.article.getArticle.article,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        articleActions: bindActionCreators(articleActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Article);