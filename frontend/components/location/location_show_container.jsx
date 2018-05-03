import { connect } from 'react-redux';

import { searchLocation } from './../../actions/location_actions';
import LocationShow from './location_show';

const mapStateToProps = state => ({
    location: state.location || {}
});

const mapDispatchToProps = dispatch => ({
  searchLocation: id => dispatch(searchLocation(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationShow);
