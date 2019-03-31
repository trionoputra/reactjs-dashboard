import React, { Component } from 'react';
import {FormattedMessage} from 'react-intl';
import {lang} from '../redux/actions/LanguageAction';
import { connect } from 'react-redux';

class Setting extends Component {

  handleChange = event => {
     this.props.dispatch(lang(event.target.value));
  }

    render() {
      return (
        <div>
          <h3><FormattedMessage id="setting"/></h3>
          <p><FormattedMessage id="change language"/></p>
          <div class="col-md-4" >
              <select name="lang" className="form-control" onChange={this.handleChange} >
                  <option value="EN">EN</option>
                  <option value="ID">ID</option>
              </select>
          </div>
        </div>
      );
    }
  }

  
  const mapStateToProps = (state, ownProps) => {
    return {
    };
}

export default connect(mapStateToProps)(Setting);
  