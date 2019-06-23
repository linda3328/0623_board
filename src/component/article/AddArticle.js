import React, { Component } from 'react';
import { Form, Button, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import reducer from '../../module/auth/reducer';

const InvisibleUploadButton = styled.input`
display:none;
`
const Preview = styled.div`
height:300px;
background-image:url(${props => props.src});
background-repeat:no-repeat;
background-position: center center;
border-radius:5px;
margin-top:10px;
&:hover{
    cursor:pointer;
}

`


class AddArticle extends Component {
    state = {
        image: null,
        content: "",
    }


    onImageChange = e => {
        if (!(e.target.files && e.target.files.length)) {

            return;
        }
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            this.setState({
                image: {
                    file: file,
                    src: reader.result,
                }
            })
        }
    }
    onAddImage = e => {
        this.refs.image.click();
    }

    onHandleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onAddArticle = e => {
        const { image, content } = this.state;
        if (!image) {
            return
        }
    }

    onDeleteImage = e => {
        this.refs.image.value = '';
        this.setState({
            image: null
        })
    }
    render() {
        const { image, content } = this.state;

        return (
            <Form>
                <InvisibleUploadButton ref="image" type="file" onChange={this.onImageChange} />
                <Button fluid onClick={this.onAddImage}>Add Image</Button>
                {image && image.src ? <Preview src={image.src} onClick={this.onDeleteImage} /> : null}

                <Form.TextArea name="content" value={content} onChange={this.onHandleChange} />
                <Button fluid onClick={this.onAddArticle}>Add Article</Button>
            </Form>
        )
    }
}

export default AddArticle;