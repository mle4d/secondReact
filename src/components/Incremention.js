import React, { PureComponent } from 'react';

export default class Incremention extends PureComponent {
  state = {
    count: 0
  };

  count = () => {
    this.setState(state => {
      return { count: state.count + 666 };
    });
  }
  render() {
    const { count } = this.state;
    return (
      <>
      <p>Hail Satan: {count}</p>
      <button onClick={this.count}>yes?</button>
      </>
    );
  }
}
