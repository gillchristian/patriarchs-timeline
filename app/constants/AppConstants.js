/*
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * TodoConstants
 */

import keyMirror from 'keymirror';

var ActionTypes = keyMirror({
  PERSONS_COMPARE: null,
  PERSONS_RESET: null,
  PERSONS_ORDER_BY_AGE: null,
  PERSONS_SHOW_TOOLTIP: null,
  PERSONS_HIDE_TOOLTIP: null,
});

export default ActionTypes;