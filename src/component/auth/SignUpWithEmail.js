import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Form } from 'semantic-ui-react';

class SignUpWithEmail extends Component {

    state = {
        email: '',
        password: '',
        passwordCheck: ''
    }

    onHandleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSignUpWithEmail = e => {
        const { email, password, passwordCheck } = this.state;

        if (!email) {
            return;
        }

        if (!password) {
            return;
        }

        if (password !== passwordCheck) {
            return;
        }

        // 이메일로 회원가입
    }

    render() {
        const { email, password, passwordCheck } = this.state;
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
                <Form.Field>
                    <label>비밀번호 확인</label>
                    <input name="passwordCheck" placeholder="비밀번호 확인" value={passwordCheck} onChange={this.onHandleChange} />
                </Form.Field>
                <Form.Button fluid type="submit" onClick={this.onSignUpWithEmail}>회원가입</Form.Button>
            </Form>
        )
    }
}

export default withRouter(SignUpWithEmail);