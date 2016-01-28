let initialState = {
  persons : [
		{ id: 0, name: 'adan', birth: 0, margin: 0, age: 930, displayTooltip: false },
    { id: 1, name: 'set', birth: 130, margin: 130, age: 912, displayTooltip: false },
    { id: 2, name: 'enos', birth: 235, margin: 235, age: 905, displayTooltip: false },
    { id: 3, name: 'cainan', birth: 325, margin: 325, age: 910, displayTooltip: false },
    { id: 4, name: 'malalel', birth: 395, margin: 395, age: 895, displayTooltip: false },
    { id: 5, name: 'jared', birth: 460, margin: 460, age: 962, displayTooltip: false },
    { id: 6, name: 'enoc', birth: 522, margin: 522, age: 365, displayTooltip: false },
    { id: 7, name: 'matusalen', birth: 587, margin: 587, age: 969, displayTooltip: false },
    { id: 8, name: 'lamec', birth: 774, margin: 774, age: 777, displayTooltip: false },
    { id: 9, name: 'noe', birth: 956, margin: 956, age: 950, displayTooltip: false },
    { id: 10, name: 'sem', birth: 1456, margin: 1456, age: 600, displayTooltip: false },
    { id: 11, name: 'arfaxad', birth: 1556, margin: 1556, age: 438, displayTooltip: false },
    { id: 12, name: 'sala', birth: 1591, margin: 1591, age: 433, displayTooltip: false },
    { id: 13, name: 'haber', birth: 1621, margin: 1621, age: 464, displayTooltip: false },    
    { id: 14, name: 'peleg', birth: 1655, margin: 1655, age: 239, displayTooltip: false },    
    { id: 15, name: 'reu', birth: 1685, margin: 1685, age: 239, displayTooltip: false },    
    { id: 16, name: 'serug', birth: 1717, margin: 1717, age: 237, displayTooltip: false },    
    { id: 17, name: 'nacor', birth: 1746, margin: 1746, age: 138, displayTooltip: false },    
    { id: 18, name: 'tare', birth: 1777, margin: 1777, age: 205, displayTooltip: false },
	]
};

let comparedState = {
  persons : [
		{ id: 0, name: 'adan', birth: 0, margin: 0, age: 930, displayTooltip: false },
    { id: 1, name: 'set', birth: 130, margin: 0, age: 912, displayTooltip: false },
    { id: 2, name: 'enos', birth: 235, margin: 0, age: 905, displayTooltip: false },
    { id: 3, name: 'cainan', birth: 325, margin: 0, age: 910, displayTooltip: false },
    { id: 4, name: 'malalel', birth: 395, margin: 0, age: 895, displayTooltip: false },
    { id: 5, name: 'jared', birth: 460, margin: 0, age: 962, displayTooltip: false },
    { id: 6, name: 'enoc', birth: 522, margin: 0, age: 365, displayTooltip: false },
    { id: 7, name: 'matusalen', birth: 587, margin: 0, age: 969, displayTooltip: false },
    { id: 8, name: 'lamec', birth: 774, margin: 0, age: 777, displayTooltip: false },
    { id: 9, name: 'noe', birth: 956, margin: 0, age: 950, displayTooltip: false },
    { id: 10, name: 'sem', birth: 1456, margin: 0, age: 600, displayTooltip: false },
    { id: 11, name: 'arfaxad', birth: 1556, margin: 0, age: 438, displayTooltip: false },
    { id: 12, name: 'sala', birth: 1591, margin: 0, age: 433, displayTooltip: false },
    { id: 13, name: 'haber', birth: 1621, margin: 0, age: 464, displayTooltip: false },    
    { id: 14, name: 'peleg', birth: 1655, margin: 0, age: 239, displayTooltip: false },    
    { id: 15, name: 'reu', birth: 1685, margin: 0, age: 239, displayTooltip: false },    
    { id: 16, name: 'serug', birth: 1717, margin: 0, age: 237, displayTooltip: false },    
    { id: 17, name: 'nacor', birth: 1746, margin: 0, age: 138, displayTooltip: false },    
    { id: 18, name: 'tare', birth: 1777, margin: 0, age: 205, displayTooltip: false },    
	]
};

let personsStates = {comparedState: comparedState, initialState: initialState};

export default personsStates;