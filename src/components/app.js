import React from 'react';
import { hot } from 'react-hot-loader'
import Test from './test';
import Counter from './counter';

const Index = () => (
  <div>
    <Counter />
    <Test />
    <p>これっっdfs</p>
  </div>
);

export default hot(module)(Index);
