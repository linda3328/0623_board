import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, List } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledListItem = styled(List.Item)`
    &&{
        &:hover{
            cursor:pointer;
            color:blue;
        }
    }
`

class SignInWithEmail extends Component {

    state = {
        email: '',
        password: ''
    }

    onHandleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSignInWithEmail = e => {
        const { email, password } = this.state;

        if (!email) {
            return;
        }

        if (!password) {
            return;
        }

        // 이메일로 로그인
    }

    onFindPassword = e => {

    }

    goToSignUpWithEmailPage = e => {
        this.props.history.push('/sign-up/email')
    }

    render() {
        const { email, password } = this.state;
        return (
            <Form>
                <Form.Field>
                    <label>이메일</label>
                    <input name="email" placeholder="이메일" value={email} onChange={this.onHandleChange} />
                </Form.Field>
                <Form.Field>
                    <label>비밀번호</label>
                    <input name="password" type="password" placeholder="비밀번호" value={password} onChange={this.onHandleChange} />
                </Form.Field>
                <Form.Button fluid type="submit" onClick={this.onSignInWithEmail}>로그인</Form.Button>
                <List>
                    <StyledListItem onClick={this.onFindPassword}>비밀번호를 잊으셨습니까? 비밀번호 찾기</StyledListItem>
                    <StyledListItem onClick={this.goToSignUpWithEmailPage}>회원이 아니십니까? 회원가입</StyledListItem>
                </List>
            </Form>
        )
    }
}

export default withRouter(SignInWithEmail);