import React, { PureComponent } from 'react';

export default class Change extends PureComponent {
  state = {
    color: ''
  };

  selectColor = color => {
    this.setState({ color });
  }
  render() {
    const { color } = this.state;
    
    return (
      <>
      <div>
        <button onClick={this.selectColor.bind(null, '#9999FF')}>Purple</button>
      </div>
      </>
    );
  }
}
