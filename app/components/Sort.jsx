import React from 'react';
import AppActions from '../actions/AppActions.js';

export default class Sort extends React.Component {
  
  _onClickSortByAge() {
    AppActions.sortByAge()
  }
	
  render() {
    console.log()
    let icon = 'glyphicon glyphicon-arrow-' + (this.props.sort ? 'up': 'down' );
    return (
			<button className='btn btn-success' onClick={this._onClickSortByAge}>Sort by Age <span className={icon}></span></button> );
  }
}