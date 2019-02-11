import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/app.js';

// module.hot.accept('./components/app', () => {
//   const NextRootContainer = require('./components/app').default;
//   ReactDOM.render(
//     <NextRootContainer />,
//     document.getElementById('root')
//   );
// })

// const render = Component => {
//   ReactDOM.render(
//     <AppContainer>
//       <Component />
//     </AppContainer>,
//     document.getElementById('root')
//   );
// }

// render(Index);

// if (module.hot) {
//   module.hot.accept('./components/app.js', () => {
//     const NextRootContainer = require('./components/app.js').default;
//     render(<NextRootContainer />, document.getElementById('react-root'));
//   })
// }

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);