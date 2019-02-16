import React, { useState, useEffect } from 'react';

const Hooks = () => {
  const [num, add] = useState(5);
  const [str, change] = useState('str!!!');
  const [arr, push] = useState([1, 2, 3]);
  const [boo, toggle] = useState(true);
  const [obj, obChange] = useState({
    number: 1,
    strings: 'strrrr',
    boolean: false,
  });

  const changeStrings = () => change(`${str}change`);

  const title = async () => {
    document.title = await 'awaitttt!';
  };

  useEffect(() => {
    title();
  });

  return (
    <div className="hooks">
      <h2>ddd</h2>
      <button type="button" onClick={() => add(num + 1)}>
        num
      </button>
      <p>{num}</p>
      <button type="button" onClick={changeStrings}>
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
        onClick={() =>
          obChange({
            ...obj,
            number: obj.number + 1,
            strings: `${obj.strings}ddd`,
          })
        }
      >
        object
      </button>
      <p>{`number:${obj.number}`}</p>
      <p>{`strings:${obj.strings}`}</p>
    </div>
  );
};

export default Hooks;
