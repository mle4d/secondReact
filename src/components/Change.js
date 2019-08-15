import React, { PureComponent } from 'react';
import styles from './change.css';

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
     <section className={styles.Color}>
       <button className={styles.purple} onClick={this.selectColor('pink')}>Purple</button>
       <button className={styles.pink} onClick={this.selectColor('blue')}>Pink</button>
       <button className={styles.blue} onClick={this.selectColor('purple')}>Blue</button>
     </section>
      </>
    );
  }
}
