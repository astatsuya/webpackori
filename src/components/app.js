import React from 'react';
import Counter from './counter';
import { hot } from 'react-hot-loader/root'

const Index = () => (
  <div>
    <Counter />
    <p>これはapp.js</p>
  </div>
);

export default hot(Index);