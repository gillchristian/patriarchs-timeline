import React from 'react';
import PeopleChart from './PeopleChart.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div >
        <h1 className='title'> Patriarchs timeline </h1>
        <PeopleChart/>
      </div>
    );
  }
}