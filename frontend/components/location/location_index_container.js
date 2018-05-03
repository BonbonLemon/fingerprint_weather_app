import { connect } from 'react-redux';

import { searchQuery } from './../../actions/location_actions';
import LocationIndex from './location_index';

const mapStateToProps = state => ({
    locations: state.locations || []
});

const mapDispatchToProps = dispatch => ({
  searchQuery: query => dispatch(searchQuery(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationIndex);
