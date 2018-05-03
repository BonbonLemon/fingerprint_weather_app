import merge from 'lodash/merge';

import {
  RECEIVE_LOCATIONS,
  RECEIVE_LOCATION_DATA
} from './../actions/location_actions';

const rootReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LOCATIONS:
      return action.locations;
    case RECEIVE_LOCATION_DATA:
      return action.location;
    default:
      return state;
  }
};

export default rootReducer;
