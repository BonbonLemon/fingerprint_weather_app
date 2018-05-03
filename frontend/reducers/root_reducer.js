import merge from 'lodash/merge';

import {
  RECEIVE_LOCATIONS,
  RECEIVE_LOCATION_DATA,
  RECEIVE_CACHE_KEYS,
  REMOVE_CACHE_KEY
} from './../actions/location_actions';

const rootReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_LOCATIONS:
      return action.locations;
    case RECEIVE_LOCATION_DATA:
      const location = action.location;
      return merge({}, state, location);
    case RECEIVE_CACHE_KEYS:
      const keys = action.keys;
      return merge({}, state, {keys: keys});
    case REMOVE_CACHE_KEY:
      const indexOfKeyToRemove = state.keys.indexOf(action.key);
      newState.keys.splice(indexOfKeyToRemove, 1);
      return newState;
    default:
      return state;
  }
};

export default rootReducer;
