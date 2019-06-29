import React, { Component } from 'react';
import { Grid, Container } from 'semantic-ui-react'
import Article from '../../component/article/Article'
import { withRouter } from 'react-router-dom'

class ArticlePage extends Component {
    render() {
        return (
            <Container>
                <Grid centered>
                    <Grid.Column computer={6} tablet={8} mobile={15}>
                        <Article
                            id={this.props.match.params.articleId} />
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}

export default withRouter(ArticlePage);