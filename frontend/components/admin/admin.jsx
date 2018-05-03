import React from 'react';

class Admin extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCacheKeys();
  }

  render() {
    return (
      <div className="container" style={{marginTop: '1rem'}}>
        hihihihi
      </div>
    )
  }
}

export default Admin;
