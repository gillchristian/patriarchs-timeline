import React from 'react';
import AppActions from '../actions/AppActions.js';

export default class Sort extends React.Component {
  
  _onClickSortByAge() {
    AppActions.sortByAge()
  }
	
  render() {
    return (
			<button className='btn btn-success' onClick={this._onClickSortByAge}>Sort by Age</button> );
  }
}