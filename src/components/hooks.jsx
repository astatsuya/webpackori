import React, { useState } from 'react';
// import { useState } from 'react';

const UseState = () => {
  const [num, add] = useState(5);
  const [str, change] = useState('str!!!');
  const [arr, push] = useState([1, 2, 3]);
  const [boo, toggle] = useState(true);
  const [obj, obChange] = useState({
    number: 1,
    strings: 'strrrr',
    boolean: false,
  });
  return (
    <div className="hooks">
      <h2>ddd</h2>
      <button type="button" onClick={() => add(num + 1)}>
        num
      </button>
      <p>{num}</p>
      <button type="button" onClick={() => change(`${str}sadja`)}>
        strings
      </button>
      <p>{str}</p>
      <button type="button" onClick={() => push(arr.concat(4))}>
        array
      </button>
      <p>{arr}</p>
      <button type="button" onClick={() => toggle(!boo)}>
        boolean
      </button>
      <p>{boo ? 'true' : 'false'}</p>
      <button
        type="button"
        onClick={() => obChange({ number: obj.number + 1 })}
      >
        object
      </button>
      <p>{`Object:${obj.number}`}</p>
    </div>
  );
};

export default UseState;
