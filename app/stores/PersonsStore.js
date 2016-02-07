import Store from './Store';
import AppDispatcherSingleton from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/AppConstants';
import personsState from '../data/PersonsData';

let appState = personsState;

/**
 * Sorting function
 * Compares by the object age property
 */
function compareByAgeAsc(a, b){
  if (a.age < b.age)
    return -1;
  if (a.age > b.age)
    return 1;
  return 0
}

/**
 * Sorting function
 * Compares by the object age property
 */
function compareByAgeDesc(a, b){
  if (a.age > b.age)
    return -1;
  if (a.age < b.age)
    return 1;
  return 0
}

/**
 * Sorting function
 * Compares by the object id property
 */
function compareArrayById(a, b){
  if (a.id < b.id)
    return -1;
  if (a.id > b.id)
    return 1;
  return 0
}

/**
 * Sorts persons by age
 */
function sortByAge(){
  appState.persons = appState.persons.map( value => Object.assign({}, value, {margin: 0}) );
  let sortCallback = appState.compareAgeAscending ? compareByAgeAsc : compareByAgeDesc;
  appState.persons.sort(sortCallback);
  appState.compareAgeAscending = !appState.compareAgeAscending;
}

/**
 * Compares all persons
 * by setting the margin (reprecents the birth) at 0
 * 
 */
function compareAll() {
  appState.persons = appState.persons.map( value => Object.assign({}, value, {margin: 0}) );
  appState.persons.sort(compareArrayById);
}

/**
 * Resets the margins to the initial value
 */
function resetMargins() {
  appState.persons = appState.persons.map( value => Object.assign({}, value, {margin: value.birth}) )
  appState.persons.sort(compareArrayById);
}

/**
 * Displayes / hides the tooltip for a person
 * 
 * @param {int} id
 */
function tooltipState(id){
  for (let value of appState.persons)
    if (value.id === id)
      value.displayTooltip = !value.displayTooltip;
}

class PersonsStore extends Store {

  constructor() {
    super();
  }

  /**
   * State getter
   */
  getState() {
  	return appState;
  }

}

let PersonsStoreSingleton = new PersonsStore();

PersonsStoreSingleton.dispatchToken = AppDispatcherSingleton.register(action => {
	
  switch(action.type) {
    /**
     * Compares the persons by age
     */
    case ActionTypes.PERSONS_COMPARE:
      compareAll();
      PersonsStoreSingleton.emitChange();
      break;
    /**
     * Resets the compared persons
     */
    case ActionTypes.PERSONS_RESET:
      resetMargins();
      PersonsStoreSingleton.emitChange();
      break;
    /**
     * Sort the persons by age
     */
    case ActionTypes.PERSONS_ORDER_BY_AGE:
      sortByAge();
      PersonsStoreSingleton.emitChange();
      break;
    /**
     * Show tooltip related to a patriarch 
     */
    case ActionTypes.PERSONS_SWITCH_TOOLTIP:
      tooltipState(action.id);
      PersonsStoreSingleton.emitChange();
      break;
      
    default:
      // no default action    
  }
});

export default PersonsStoreSingleton;