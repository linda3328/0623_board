import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import firebase from 'firebase'

import * as authActions from './module/auth/actions'
import { push } from 'connected-react-router'



/**
 * connected-react-router를 사용하기 위해서 history를 직접 만들어야 한다.
 * history.push기능을 redux에서 바로 사용하기 위해 추가
 */
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router'

// module/index.js -> 다음과 같이 index.js는 생략 가능
import { configureStore } from './module'

const history = createBrowserHistory();

// Redux store 생성
const store = configureStore(history);


// firebase 환경변수
var firebaseConfig = {
    apiKey: "AIzaSyC1iQ0Hn3CMtuLie6t1T5P4dSGhlCIaesY",
    authDomain: "folio-cf31c.firebaseapp.com",
    databaseURL: "https://folio-cf31c.firebaseio.com",
    projectId: "folio-cf31c",
    storageBucket: "folio-cf31c.appspot.com",
    messagingSenderId: "99682798042",
    appId: "1:99682798042:web:3fc871172a89605b"
};
// Initialize Firebase 초기화


// let isinitialized = false;
firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged((user) => {
    store.dispatch(authActions.updateUser(user));
    // if (user) {
    //     store.dispatch(push('/'))
    // } else {
    //     store.dispatch(push('/sign-in'))
    // }
    // isinitialized = true;
})


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));
