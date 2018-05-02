import React from 'react';

class LocationIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }

  render() {
    // .container(style="margin-top: 1rem")
    //   - if @locations.blank?
    //     h3
    //       | Nothing to see here... :( Try search again.
    //   - else
    //     table.table.table-striped
    //       thead
    //         tr
    //           th
    //             | Title
    //           th
    //             | Location Type
    //
    //       tbody
    //         - @locations.each do |location|
    //           tr
    //             td
    //               = link_to location['title'], location_path(id: location['woeid'])
    //             td
    //               = location['location_type']
    const { query } = this.props;
    return (
      <div>
        <div className="container" style={{marginTop: "1rem"}} >
          <form className="form-inline">
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
      </div>
    )
  }
}

export default LocationIndex;
