import React, { Component } from 'react';
import { Button,Form,FormGroup,FormControl,Alert,Fade,Glyphicon  } from 'react-bootstrap';
import { connect } from 'react-redux';

import logo from '../assets/images/logo.svg';
import loader from '../assets/images/loader.gif';

import { AuthActions } from '../redux/actions/AuthAction';
import history from '../history';
import {FormattedMessage,injectIntl} from 'react-intl';

class Login extends Component {
    constructor() {
        super();
        this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
        this.ValidateForm = this.validateForm.bind(this);
        this.state = { userdata: {username: "" ,password: ""}};
    }

    handleChange = event => {
        let userdata = Object.assign({}, this.state.userdata);
        userdata[event.target.id] = event.target.value;
        this.setState({
            userdata: userdata
        });
    }

    handleSubmitLogin(event) {
        event.preventDefault();
          this.props.dispatch(AuthActions.login(this.state.userdata.username,this.state.userdata.password,()=>{
                history.push("Home");
                this.forceUpdate();
          }));
    }
   
    validateForm(){
        return this.state.userdata.username.length > 0 && this.state.userdata.password.length > 0;
    }

    render() {
        const { intl } = this.props;
      return (


        <div className="root-inner">   
            <div className='row'>
                <div className="col-md-4 col-md-offset-4 login-wrapper">
                    <div className="app-logo-wrapper">
                    <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    <div className="col-md-8 col-md-offset-2">
                        <span className='login-title'><FormattedMessage id="log in"/></span> 
                        <Form  onSubmit={this.handleSubmitLogin} className='login-form'>
                            <FormGroup className='form-group-nest'>
                                <div className="icon-addon addon-lg">
                                <FormControl type="text" required onChange={this.handleChange} value={this.state.userdata.username} name="username" id="username" placeholder={intl.formatMessage({'id':"username"})} />    
                                    <Glyphicon glyph="envelope" />
                                </div>
                            </FormGroup>
                            <FormGroup>
                                <div className="icon-addon addon-lg">
                                
                                <FormControl type="password" required onChange={this.handleChange} value={this.state.userdata.password} name="password" id="password" placeholder={intl.formatMessage({'id':"password"})} />
                                    <Glyphicon glyph="lock" />
                                </div>
                            </FormGroup>
                            <Button type='submit' disabled={!this.validateForm()} className="btn-block" bsStyle="primary" bsSize='large'><FormattedMessage id="login"/> </Button>
                        </Form>
                    </div>
                    <div className='login-message-wrapper col-md-12'>
                        {this.props.isLoading ? 
                        (<img width="50" src={loader} id="login-loader" />) 
                        :
                        (<Fade className="login-message" in={this.props.notif.type !== "" } >
                            <Alert className={'alert-' + this.props.notif.type}>
                                {this.props.notif.message}
                            </Alert>
                        </Fade>)
                          }
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }
  
const mapStateToProps = (state, ownProps) => {
    return {
        isLoading: state.loader.isShow,
        notif:{type:state.alert.type,message:state.alert.message}
    };
}
 
export default connect(mapStateToProps)(injectIntl(Login));
  