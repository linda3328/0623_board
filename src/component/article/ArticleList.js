import React, { Component } from 'react';
import ArticleItem from './ArticleItem';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as articleActions from '../../module/article/actions'
import { Button } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom'

class ArticleList extends Component {



    static defaultProps = {

        list: [],

    }



    componentDidMount() {
        this.props.articleActions.getArticleList(null, 1);
    }
    onLoadMore = () => {

        let lastItem = null;
        if (this.props.list.length) {
            lastItem = this.props.list[this.props.list.length - 1];
        }


        this.props.articleActions.getArticleList(lastItem, 1);
    }

    //게시글 아이디를 해야 해당 아이디로 넘어감
    onItemClick = (id) => {
        this.props.history.push('/article/' + id);
    }

    render() {

        const { list, isLoading } = this.props

        const listView = list.map((doc, index) => {
            const item = doc.data();

            return <ArticleItem
                // <Grid.Column>
                // key={item.id}
                // computer={6} tablet={8} mobile={15}
                // </Grid.Column>
                // <ArticleItem
                key={item.id}
                id={item.id}
                downloadUrl={item.downloadUrl}
                content={item.content}
                commentCnt={item.commentCnt}
                likeCnt={item.likeCnt}
                createdAt={item.createdAt}
                updatedAt={item.updatedAt}
                userDisplayName={item.userDisplayName}
                userId={item.userId}
                userProfileUrl={item.userProfileUrl}
                onClick={this.onItemClick}
            />

        })

        return <div>
            {/* <Grid>

            </Grid> */}
            {listView}
            <Button
                fluid
                loading={isLoading}
                onClick={this.onLoadMore}>More</Button>

        </div>
    }
}


const mapStateToProps = (state) => {
    return {
        list: state.article.articleList.list,
        isLoading: state.article.articleList.isLoading,
        error: state.article.articleList.error,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        articleActions: bindActionCreators(articleActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ArticleList));