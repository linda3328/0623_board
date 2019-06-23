import React, { Component } from 'react';
import { Grid, Container } from 'semantic-ui-react'

class ArticlePage extends Component {
    render() {
        return (
            <Container>
                <Grid centered>
                    <Grid.Column computer={6} tablet={8} mobile={15}>
                        ArticlePage
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}

export default ArticlePage;