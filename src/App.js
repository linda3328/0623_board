import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import SignInPage from './page/auth/SignInPage'
import SignInWithEmailPage from './page/auth/SignInWithEmailPage'
import SignUpWithEmailPage from './page/auth/SignUpWithEmailPage'
import Header from './component/header/Header'
import ArticleListPage from './page/article/ArticleListPage'
import AddArticle from './page/article/AddArticlePage'
import ArticlePage from './page/article/ArticlePage'
class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route path="/" exact component={ArticleListPage} />
          <Route path="/sign-in" exact component={SignInPage} />
          <Route path="/sign-in/email" component={SignInWithEmailPage} />
          <Route path="/sign-up/email" component={SignUpWithEmailPage} />
          <Route path="/add-article" component={AddArticle} />
          <Route path="/article/:articleId" component={ArticlePage} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
