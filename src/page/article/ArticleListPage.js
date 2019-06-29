import React, { Component } from 'react';
import { Grid, Container } from 'semantic-ui-react'
import ArticleList from '../../component/article/ArticleList'

class ArticleListPage extends Component {
    render() {
        return (
            <Container>
                <Grid centered>
                    <Grid.Column computer={6} tablet={8} mobile={15}>
                        <ArticleList />
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}

export default ArticleListPage;