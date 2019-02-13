/*global module */

import React from 'react';
import { hot } from 'react-hot-loader';
import Test from './test';
import Counter from './counter';
import styles from './appScss.scss';

const App = () => (
  <div className={styles.app}>
    <Counter />
    <Test />
    <h2>これはh2</h2>
    <p>ここはIndex</p>
    <p>ここはIndex</p>
  </div>
);

export default hot(module)(App);
