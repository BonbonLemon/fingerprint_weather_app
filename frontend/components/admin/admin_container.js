import { connect } from 'react-redux';

import { getCacheKeys, deleteCacheKey } from './../../actions/location_actions';
import Admin from './admin';

const mapStateToProps = state => ({
  keys: state.keys || []
});

const mapDispatchToProps = dispatch => ({
  getCacheKeys: () => dispatch(getCacheKeys()),
  deleteCacheKey: key => dispatch(deleteCacheKey(key))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin);
