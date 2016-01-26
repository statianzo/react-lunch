import React from 'react';

class Satellite extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      direction: null
    };
  }

  face(direction) {
    this.setState({
      direction: direction
    });
  }

  render() {
    const status = this.state.direction
      ? <h1>Satellite pointed {this.state.direction}</h1>
      : <h1>Satellite disabled</h1>;

    const directions = ['North', 'South', 'East', 'West'];
    const directionButtons = directions.map((direction) => {
      return <button key={direction} onClick={() => this.face(direction)}>
        {direction}
      </button>;
    });


    return <div>
      {status}
      {directionButtons}
    </div>;
  }
}
export default Satellite;
