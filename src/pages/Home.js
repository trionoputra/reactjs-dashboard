import React, { Component } from 'react';
import { connect } from 'react-redux';
import {HomeAction} from '../redux/actions/HomeAction';
import {FormattedMessage} from 'react-intl';

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {};             
  }

  fetchExchangeRate() {
    let data = {
      base : "IDR"
    };
    this.props.dispatch(HomeAction.fetchExchangeRate(data));
}

componentDidMount() {
  this.fetchExchangeRate();
}

    render() {
     
      
      return ( 
        <div>
          <h3><FormattedMessage id="dashboard"/></h3>
          
          <div className="col-md-12 home-table-wrapper" >
            <table className='table table-striped'>
                <thead>
                <tr>
                  <th><FormattedMessage id="currency"/></th>
                  <th><FormattedMessage id="value"/></th>
                </tr>
                </thead>
                <tbody>
                {
                  this.props.rates.map((data)  =>
                  <tr>
                    <td>{data.key}</td>
                    <td>{data.value}</td>
                  </tr>
                  )
                }
                 </tbody>
              </table>
          </div>
        </div>
      );
    }
  }
  const mapStateToProps = (state, ownProps) => {
    return {
      rates:state.home.rates,
    };
}

export default connect(mapStateToProps)(Home);