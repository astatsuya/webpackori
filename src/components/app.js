import React from 'react';
import { hot } from 'react-hot-loader'
import Test from './test';
import Counter from './counter';
// import styles from '../index.css'

const Index = (props) => (
  <div>
{/*   <div className={styles.index}>
 */}    <Counter />
    <Test />
    <p>ここはIndex</p>
    <p>ここはIndex</p>
    <p>{props.text}</p>
  </div>
);

export default Index;
