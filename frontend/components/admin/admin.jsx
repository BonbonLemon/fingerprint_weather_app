import React from 'react';

class Admin extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCacheKeys();
  }

  deleteKey(e, key) {
    e.preventDefault();
    this.props.deleteCacheKey(key);
  }

  render() {
    const { keys } = this.props;

    return (
      <div className="container" style={{marginTop: '1rem'}}>
        <h3>Cache Keys</h3>
        { keys.map(key => (
          <div key={ key }>
            { key }
            <button type="button" className="btn btn-danger btn-sm" onClick={e => this.deleteKey(e, key)}>Delete</button>
          </div>
        ))}
      </div>
    )
  }
}

export default Admin;
