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
       <button className={styles.purple} onClick={this.selectColor('purple')}>Purple</button>
       <button className={styles.pink} onClick={() =>this.selectColor('pink')}>Pink</button>
       <button className={styles.blue} onClick={this.selectColor('blue')}>Blue</button>
       <div><button className={styles[color]}>A DIFFERENT COLOR</button></div>
     </section>
      </>
    );
  }
}
