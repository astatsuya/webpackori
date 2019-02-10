import React from 'react';
import ReactDOM from 'react-dom';

const Index = () => (
  <div>
    <h2>This is Root</h2>
  </div>
);

// class Index extends React.Component {
//   render() {
//     return (
//       <div>
//         <h2>This is Root</h2>
//       </div>
//     );
//   }
// }

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);