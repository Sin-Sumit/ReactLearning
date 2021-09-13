import React, { useState } from 'react';

const UseStateBasics = () => {
  // let title = 'random title';
  const [text,setText] = useState('random title');
  const handleClick = () => {
    if (text === 'random title')
      setText('hello world!!');
    else
      setText('random title');
  }
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type='button' className='btn' onClick={handleClick}>
      Change Title</button>
    </React.Fragment>
  
    );
};

export default UseStateBasics;
