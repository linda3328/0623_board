import React, { Component } from 'react';
// import styled from 'styled-components';
import ArticleItem from './ArticleItem'
import { Loader } from 'semantic-ui-react';



class Article extends Component {

    static defaultProps = {
        id: null,
        article: null,
    }
    render() {

        const {
            article,
        } = this.props;

        console.log(this.props.id)


        return article ? (
            <ArticleItem />
        ) : (
                <Loader active />
            )
    }
}

export default Article;