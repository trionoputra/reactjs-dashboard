import React, { Component } from 'react';

import logo from '../assets/images/error_404.png';
import {FormattedMessage,FormattedHTMLMessage} from 'react-intl';

class EMPATNOLEMPAT_INNER extends Component {
    constructor() {
        super();
      }

    render() {

      return (

        <div className="root-inner">
            <div className='row'>
                <div className="col-md-6 col-md-offset-3 wrapper-notfound">
                     <img src={logo} width="300" className="App-logo-404" />
                    <div className='text-404'>404</div>
                    <div className='text-notfound'><FormattedMessage id="page not found"/></div>
                    <div className='text-notfound-detail'><FormattedHTMLMessage id="the page are you looking for doesnt seem to exist"/></div>
                </div>
            </div>
        </div>
      );
    }
  }
export default EMPATNOLEMPAT_INNER;
  