import React, { Component } from 'react';
import { Grid, Container } from 'semantic-ui-react'
import AddArticle from '../../component/article/AddArticle'

class AddArticlePage extends Component {
    render() {
        return (
            <Container>
                <Grid centered>
                    <Grid.Column computer={6} tablet={8} mobile={15}>
                        <AddArticle />
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}

export default AddArticlePage;