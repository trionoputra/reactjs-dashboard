import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../../assets/css/index.css';
import '../../assets/css/font-awesome.min.css';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/react-sidemenu.min.css';
import '../../assets/css/App.css';

import Header from './Header';
import MenuLeft from './MenuLeft';
import Footer from './Footer';

import Home from '../Home';
import About from '../About';
import SubAbout from '../SubAbout';
import NoMatch from '../404_inner';
import Setting from '../Setting';

import { AuthActions } from '../../redux/actions/AuthAction';
import { Router as BrowserRouter,  Switch, Route  } from 'react-router-dom';
import Sidebar from "react-sidebar";

class Layout extends Component {
    
    constructor(props) {
        super(props);
    }
    render() {
      return (
        <Sidebar
        sidebar={<MenuLeft />}
        open={this.props.isOpen}
        docked={this.props.isOpen}
        shadow={false}
        styles={{ sidebar: { background: "white" } }}
       >
        <div className='wrapper '>
          <Header/>
          <div className='content'>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/home"} component={Home} />
            <Route exact path={"/about"} component={About} />
            <Route exact path={"/about/sub-about"} component={SubAbout} />
            <Route exact path={"/setting"} component={Setting} />
            <Route  component={NoMatch}/>
          </Switch>
          <div style={{clear:"both"}}></div>
          </div>
            <Footer/>
        </div>
       
      </Sidebar>
      );
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
        username: state.auth.username,
        isOpen: state.menu.isOpen
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => { dispatch(AuthActions.logout()); }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Layout);