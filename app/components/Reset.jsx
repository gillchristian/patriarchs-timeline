import React from 'react';
import AppActions from '../actions/AppActions.js';

export default class Reset extends React.Component {

  _onClickReset() {
    AppActions.reset()
  }
	
  render() {
    return (
        <button className='btn btn-warning' onClick={this._onClickReset}>Reset</button> );
  }
}