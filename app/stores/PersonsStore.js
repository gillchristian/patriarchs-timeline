import Store from './Store';
import AppDispatcherSingleton from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/AppConstants';
import personsState from '../data/PersonsData';

let appState = personsState.initialState;

function compareArrayByAge(a, b){
  if (a.age < b.age)
    return -1;
  else if (a.age > b.age)
    return 1;
    else return 0
}

function compareArrayById(a, b){
  if (a.id < b.id)
    return -1;
  else if (a.id > b.id)
    return 1;
    else return 0
}

function sortByAge(){
  appState = {};  
  appState = personsState.comparedState;
  appState.persons.sort(compareArrayByAge);
}

function compareAll() {
  appState = {};
  appState = personsState.comparedState;
  appState.persons.sort(compareArrayById);
}

function resetMargins() {
  appState = {};
  appState = personsState.initialState;
}

function showTooltip(id){
  appState.persons.map((value)=>{
    if (value.id === id)
      value.displayTooltip = true;
  })
}

function hideTooltip(id){
  appState.persons.map((value)=>{
    if (value.id === id)
      value.displayTooltip = false;
  })
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
    case ActionTypes.PERSONS_SHOW_TOOLTIP:
      showTooltip(action.id);
      PersonsStoreSingleton.emitChange();
      break;

    /**
     * Show tooltip related to a patriarch 
     */
    case ActionTypes.PERSONS_HIDE_TOOLTIP:
      hideTooltip(action.id);
      PersonsStoreSingleton.emitChange();
      break;



    default:
      // no default action    
  }
});

export default PersonsStoreSingleton;