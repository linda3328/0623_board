import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Message } from 'semantic-ui-react';
import * as authActions from '../../module/auth/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

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
            this.props.authActions.signUpWithEmailFailed(new Error('Enter your Email'))

            return;
        }

        if (!password) {
            this.props.authActions.signUpWithEmailFailed(new Error('Enter your Password'))

            return;
        }

        if (password !== passwordCheck) {
            this.props.authActions.signUpWithEmailFailed(new Error('Password does not Match'))

            return;
        }

        this.props.authActions.signUpWithEmail(email, password);
    }

    render() {
        const { email, password, passwordCheck } = this.state;
        const { isLoading, error } = this.props;
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
                    <input name="passwordCheck" type="password" placeholder="비밀번호 확인" value={passwordCheck} onChange={this.onHandleChange} />
                </Form.Field>
                <Form.Button
                    loading={isLoading}
                    fluid type="submit" onClick={this.onSignUpWithEmail}>회원가입</Form.Button>
                {
                    error && error.message ? <Message>{error.message}</Message> : null
                }
            </Form>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        isLoading: state.auth.signUpWithEmail.isLoading,
        error: state.auth.signUpWithEmail.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        authActions: bindActionCreators(authActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignUpWithEmail));