import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import authReducer from './auth/reducer';
import articleReducer from './article/reducer';

export function configureStore(history) {

    /**
     * 복수 개의 미들웨어를 사용하는 경우
     * applyMiddleware(thunk, logger, ...)
     */
    const middleware = applyMiddleware(
        thunk,
        routerMiddleware(history)
    );

    const composed = window.__REDUX_DEVTOOLS_EXTENSION__ ?
        compose(
            middleware,
            window.__REDUX_DEVTOOLS_EXTENSION__()
        ) :
        middleware;

    /**
     *  createStore에 첫번 째 인자는 리듀서, 두번 째 인자는 미들웨어
     *  리듀서에도 하나의 리듀서만 들어 갈 수 있다. 만약 여러 개의 리듀서를 사용해야 하는 경우 
     *  combineReducers를 사용해서 하나로 만들어 준다.
     *  미들웨어에 DevTool를 사용하기 위해서는 compose를 사용해서 미들웨어와 DevTool을 하나로 만들어야 한다.
     */
    return createStore(
        combineReducers({
            auth: authReducer,
            article: articleReducer,
            router: connectRouter(history)
        }),
        composed
    )

}