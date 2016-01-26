import React from 'react';

class Counter extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    //Update this.state.count every second
    this.interval = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
    }, 1000)
  }

  componentWillUnmount() {
    cancelInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h1>Total: {this.state.count}</h1>
      </div>
    );
  }
}
export default Counter;
