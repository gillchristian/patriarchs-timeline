import React from 'react';
import Person from './Person.jsx';
import Controls from './Controls.jsx';
import PersonsStoreSingleton from '../stores/PersonsStore';


function getPersonsState(){
	return PersonsStoreSingleton.getState();
}

export default class PeopleChart extends React.Component {

	constructor(){
		super();
		this.state = getPersonsState();
	}

	/**
	 * Callback provided to the  
	 */
	_onChange = () =>{
		this.setState( getPersonsState() );
	};
	
	componentDidMount(){
		PersonsStoreSingleton.addChangeListener(this._onChange)
	}
	
	componentWillUnMount(){
		PersonsStoreSingleton.removeChangeListener(this._onChange)
	}
	
	/**
	 * Renders a list of persons passed as props
	 */
	personsList() {
		return this.state.persons
							.map( (person, key) =>
								<Person 
										key={key}
										person={person}
									/> );
	}
	
  render() {
    return (
      <div className='peopleChart'>
				<Controls />
        { this.personsList() }
      </div>
    );
  }
}