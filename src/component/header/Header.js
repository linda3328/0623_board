import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom'
import * as authActions from '../../module/auth/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
class Header extends Component {

    goToSignInPage = e => {
        this.props.history.push('/sign-in')
    }

    onSignOut = e => {
        this.props.authActions.signOut();

    }

    render() {
        return (
            <Menu>
                <Menu.Item header>
                    내 서비스
                </Menu.Item>

                <Menu.Menu position="right">
                    <Menu.Item onClick={this.goToSignInPage}>
                        로그인
                    </Menu.Item>
                    <Menu.Item onClick={this.onSignOut}>
                        로그아웃
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.auth.signOut.isLoading,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        authActions: bindActionCreators(authActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));