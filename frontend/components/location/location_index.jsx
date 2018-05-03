import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as qs from 'query-string';

class LocationIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const params = qs.parse(this.props.location.search);
    if (params.query) {
      this.setState({query: params.query})
      this.props.searchQuery(params.query);
    }
  }

  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push("?query=" + this.state.query);
    this.props.searchQuery(this.state.query);
  }

  noLocationsMessage() {
    return (
      <h3>Nothing to see here... :( Try search again.</h3>
    );
  }

  locationsTable(){
    const { locations } = this.props;

    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Location Type</th>
          </tr>
        </thead>
        <tbody>
          { locations.map(location => (
            <tr key={location['title']}>
              <td>
                <Link to={"locations/" + location['woeid']}>
                  { location['title'] }
                </Link>
              </td>
              <td>
                { location['location_type'] }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  render() {
    const { query } = this.state;
    const { locations } = this.props;

    return (
      <div>
        <div className="container" style={{marginTop: "1rem"}} >
          <form className="form-inline" onSubmit={this.handleSubmit}>
            <div className="form-row align-items-center">
              <div className="col-auto">
                <input
                  type="text"
                  value={query}
                  onChange={this.update('query')}
                  className="form-control"
                  placeholder="Location..."
                />
              </div>
              <div className="col-auto">
                <input
                  type="submit"
                  value="Search..."
                  className="btn btn-primary"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="container" style={{marginTop: "1rem"}}>
          { locations.length == 0 ? this.noLocationsMessage() : this.locationsTable() }
        </div>
      </div>
    )
  }
}

export default withRouter(LocationIndex);
