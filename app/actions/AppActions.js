/*
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * TodoActions
 */

import AppDispatcherSingleton from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/AppConstants.js';

var AppActions = {

  /**
   * Compare action
   */
  compare: () => {
    AppDispatcherSingleton.dispatch({
      type: ActionTypes.PERSONS_COMPARE
    });
  },
	
  /**
   * Set reset placemet
   */
  reset: () => {
    AppDispatcherSingleton.dispatch({
      type: ActionTypes.PERSONS_RESET
    });
  },
  
  /**
   * Sort patriarchs by Age
   */
  sortByAge: () => {
    AppDispatcherSingleton.dispatch({
      type: ActionTypes.PERSONS_ORDER_BY_AGE
    });
  },
  
  /**
   * Show tooltip for hovered patriarch.
   * 
   * @param {int} id  patriarch id
   */
  switchTooltip: (id) => {
    AppDispatcherSingleton.dispatch({
      type: ActionTypes.PERSONS_SWITCH_TOOLTIP,
      id: id
    });
  }
};

export default AppActions;