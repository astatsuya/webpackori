import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader'
import Index from './components/app.js';

// const Index = hot(module)(Index);

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);