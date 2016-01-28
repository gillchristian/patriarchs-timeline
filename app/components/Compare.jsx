import React from 'react';
import AppActions from '../actions/AppActions.js';

export default class Compare extends React.Component {
  
	_onClickCompare() {
    AppActions.compare();
  }
	
  render() {
    return (
      <button className='btn btn-success' onClick={this._onClickCompare}>Compare ages</button> );
  }
}