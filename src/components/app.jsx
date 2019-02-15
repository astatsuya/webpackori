/* global module */

import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from 'react-hot-loader';
import Test from './test';
import Counter from './counter';
import UseState from './hooks';
import styles from './appScss.scss';
import boy from '../images/boy.jpg';

const App = () => (
  <div className={styles.app}>
    <Counter />
    <Test />
    <UseState />
    <p>ここからapp.js</p>
    <h2>これはh2</h2>
    <p>ここはIndex</p>
    <p>ここはIndex</p>
    <p>ここはIndex</p>
    <img src={boy} width={300} height={300} alt="boy" />
  </div>
);

export default hot(module)(App);
