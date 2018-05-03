import * as APIUtil from './../util/location_api_util';

export const RECEIVE_LOCATIONS = 'RECEIVE_LOCATIONS';
export const RECEIVE_LOCATION_DATA = 'RECEIVE_LOCATION_DATA';
export const RECEIVE_CACHE_KEYS = 'RECEIVE_CACHE_KEYS';

export const receiveLocations = locations => ({
  type: RECEIVE_LOCATIONS,
  locations
});

export const receiveLocationData = location => ({
  type: RECEIVE_LOCATION_DATA,
  location
});

export const receiveCacheKeys = keys => ({
  type: RECEIVE_CACHE_KEYS,
  keys
});

export const searchQuery = query => dispatch => (
  APIUtil.searchQuery(query).then(locations => (
    dispatch(receiveLocations(locations))
  ))
);

export const searchLocation = id => dispatch => (
  APIUtil.searchLocation(id).then(location => (
    dispatch(receiveLocationData(location))
  ))
);

export const getCacheKeys = () => dispatch => (
  APIUtil.getCacheKeys().then(keys => (
    dispatch(receiveCacheKeys(keys))
  ))
);
