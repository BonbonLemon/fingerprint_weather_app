import React from 'react';

class LocationIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const woeid = parseInt(this.props.match.params.id);
    this.props.searchLocation(woeid);
  }

  locationNotFound() {
    return (
      <h2>Location not found</h2>
    );
  }

  locationData() {
    const { location } = this.props;

    return (
      <dl>
        <dt>Title</dt>
        <dd>{ location.title }</dd>
        <dt>Location Type</dt>
        <dd>{ location.latt_long }</dd>
        <dt>Time</dt>
        <dd>{ location.time }</dd>
        <dt>Sunrise</dt>
        <dd>{ location.sun_rise }</dd>
        <dt>Sunset</dt>
        <dd>{ location.sun_set }</dd>
        <dt>Timezone</dt>
        <dd>{ location.timezone_name }</dd>
        { location.consolidated_weather.map(report => (
          <div key={ report.id }>
            <hr/>
            <dt>Applicable Date</dt>
            <dd>{ report.applicable_date }</dd>
            <dt>Weather Icon</dt>
            <img src={"https://www.metaweather.com/static/img/weather/png/64/" + report['weather_state_abbr'] + ".png"} />
            <dt>Min Temp</dt>
            <dd>{ report.min_temp }</dd>
            <dt>Temp</dt>
            <dd>{ report.the_temp }</dd>
            <dt>Max Temp</dt>
            <dd>{ report.max_temp }</dd>
          </div>
        ))}
      </dl>
    )
  }

  render() {
    const { location } = this.props;

    return (
      <div className="container" style={{marginTop: '1rem'}}>
        { location.title ? this.locationData() : this.locationNotFound() }
      </div>
    )
  }
}

export default LocationIndex;
