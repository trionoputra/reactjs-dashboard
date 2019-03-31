import React, { Component } from 'react';
import react from '../../assets/images/logo.svg';

class Footer extends Component {
    render() {
      return (
        <div className="footer">
          <div className="col-md-12">
            <div className="col-md-4">
              
            </div>
            <div className='col-md-4' style={{textAlign:"center"}}>
              <img className='footer-logo-react' height="40" src={react} />
            </div>
            <div className="col-md-4">
              <div className="footer-text">
                <label>&copy; 2018 <a href="https://github.com/trionoputra">https://github.com/trionoputra</a></label>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Footer;
  