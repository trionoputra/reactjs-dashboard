import React, { Component } from 'react';
import Layout from './pages/template/Layout';
import Login from './pages/Login';
import { connect } from 'react-redux';
import { AuthActions } from './redux/actions/AuthAction';
import  {CONSTANT}  from './helpers';
import history from './history';
import { Router as BrowserRouter,  Switch, Route  } from 'react-router-dom';
import {IntlProvider,addLocaleData} from "react-intl";

import locale_en from 'react-intl/locale-data/en';
import locale_id from 'react-intl/locale-data/id';

import messages_id from "./languages/id.json";
import messages_en from "./languages/en.json";

const messages = {
  'ID': messages_id,
  'EN': messages_en
};

addLocaleData([...locale_id, ...locale_en, ]);

class App extends Component {
 
  render() 
  {
    
    let lang = this.props.lang;
    if(localStorage.getItem(CONSTANT.KEY_ISLOGIN) === "true" && !this.props.isLoggedIn)
          this.props.onLogin(localStorage.getItem(CONSTANT.KEY_AUTH_USERNAME),localStorage.getItem(CONSTANT.KEY_AUTH_PASSWORD));
      
    return (
        <IntlProvider locale={lang} messages={messages[lang]}>
          <BrowserRouter history={history} basename={"/"} >
                <div>
                <Switch>
                  <Route  component={(this.props.isLoggedIn || localStorage.getItem(CONSTANT.KEY_ISLOGIN) === "true") ? Layout : Login} />
                </Switch>
                </div>
          </BrowserRouter>
      </IntlProvider>);
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state.auth.isLoggedIn);
  return {
      isLoggedIn: state.auth.isLoggedIn,
      lang: state.language.lang
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
      onLogin: (username, password) => { dispatch(AuthActions.auth(username, password)); }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);