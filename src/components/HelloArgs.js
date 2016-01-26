import React from 'react';

// This component takes props
class HelloArgs extends React.Component {
  render() {
    return <h1>Hello from React, {this.props.name}!</h1>;
  }
}

export default HelloArgs;
