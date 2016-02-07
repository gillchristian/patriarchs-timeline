import React from 'react';
import Compare from './Compare.jsx';
import Sort from './Sort.jsx';
import Reset from './Reset.jsx';

export default class Controls extends React.Component {
	
  render() {
    return (
      <div className='controls'>
        <Compare />
        <Sort sort={this.props.sort}/>
        <Reset />
      </div>
    );
  }
}