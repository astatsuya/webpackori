import React from 'react';
import Counter from './counter';
import { hot } from 'react-hot-loader'

const Index = () => (
  <div>
    <Counter />
    <p>これはapp.js</p>
  </div>
);

export default hot(module)(Index);
