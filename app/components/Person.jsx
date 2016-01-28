import React from 'react';
import Tooltip from './Tooltip';
import AppActions from '../actions/AppActions.js';

export default class Person extends React.Component {
  
  _onMouseLeave(){
    AppActions.hideTooltip(this.props.person.id);
  }
  
  _onMouseEnter(){
    AppActions.showTooltip(this.props.person.id);
  }
	
  render() {
    let person = this.props.person;
    let personClasses = person.name + ' patriarch';
    let styles = {marginLeft: person.margin};
    return (
      <div 
        className={personClasses}
        style={ styles }
        onMouseEnter={this._onMouseEnter.bind(this)} 
        onMouseLeave={this._onMouseLeave.bind(this)}>
				<p className='name'>{person.name}</p>
        
        <Tooltip show={person.displayTooltip}>
          <p>{person.name.toUpperCase()}</p>
          <p>Was born {person.birth} years after Creation</p>
          <p>Lived {person.age}</p>
        </Tooltip>
        
      </div>
    );
  }
}