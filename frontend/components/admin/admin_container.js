import { connect } from 'react-redux';

import { getCacheKeys } from './../../actions/location_actions';
import Admin from './admin';

const mapStateToProps = state => ({
  keys: state.keys || []
});

const mapDispatchToProps = dispatch => ({
  getCacheKeys: () => dispatch(getCacheKeys())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin);
