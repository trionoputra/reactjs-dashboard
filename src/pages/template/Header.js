import React,{Component} from 'react';
import { connect } from 'react-redux';
import { menu } from '../../redux/actions/MenuAction';
import imgBurger from '../../assets/images/burger_menu.png';
import imgPP from '../../assets/images/pp_icon.png';
import imgMessage from '../../assets/images/message.png';
import imgMessageNotif from '../../assets/images/message_notif.png';
import Moment from 'moment';
import history from '../../history';
import { AuthActions } from '../../redux/actions/AuthAction';
import {CONSTANT} from '../../helpers';
import loader from '../../assets/images/loader.gif';
import {Alert,Fade } from 'react-bootstrap';
import {FormattedMessage} from 'react-intl';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            date: Moment(new Date()).format("ddd, DD MMM YYYY"),
            hasNotif:true
          };
      }
    toogle (e) {
        this.props.onToogle(!this.props.isOpen);
    }
    userLogout(e) {
        this.props.onLogout();
        history.push("Login");
        this.forceUpdate();
    }

    componentDidMount()
    {
    }

    render() {
      
        return (
        <div className='menu-header'>
            <div className='menu-header-left'>
                <img onClick={(e) => this.toogle(e)} className='burger-menu pull-left' src={imgBurger} />
                <div className='menu-header-date-wrapper pull-left'>
                    <div className='menu-header-today'>
                    <FormattedMessage id="today"/>
                    </div>
                    <div className='menu-header-date'>
                     {this.state.date}
                    </div>
                </div>
                
            </div>
            <div className='col-md-4 col-md-offset-2'>
            <Fade className="global-message" in={this.props.notif.type !== "" } >
                <Alert className={'alert-' + this.props.notif.type}>
                    {this.props.notif.message}
                </Alert>
            </Fade>
            </div>
            <div className='menu-header-right pull-right col-md-4'>
            <div className='pull-right'>
            <img width="30" src={loader} id="global-loader" className='pull-left' style={{display:(this.props.isLoaderShow ? 'block':'none')}} />
            <img className='message-icon pull-left' src={ this.state.hasNotif  ? imgMessageNotif : imgMessage} />
            <div className='pp-icon pull-left' style={{backgroundImage: 'url("'+imgPP+'")'}}/>
                <div className='pull-left'>
                <div className='menu-header-name'>
                    <FormattedMessage id="welcome"/> <span>{localStorage.getItem(CONSTANT.KEY_AUTH_USERNAME)}</span>
                </div>
                <div className='menu-header-logout'>
                    <a href="" onClick={(e) => this.userLogout(e)} className='menu-logout'><FormattedMessage id="logout"/> </a>
                </div>
                </div>
            </div>
            </div>
            
        </div>
      );
    }
  }

const mapStateToProps = (state, ownProps) => {
    return {
        isOpen: state.menu.isOpen,
        isLoaderShow: state.loader.isShow,
        notif:{type:state.alert.type,message:state.alert.message}
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        onToogle: (open) => { dispatch(menu(open)); },
        onLogout: () => { dispatch(AuthActions.logout()); },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);