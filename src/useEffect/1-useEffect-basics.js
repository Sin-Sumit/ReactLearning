import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value,setValue] = useState(0);

  useEffect(()=>{
    console.log('useEffect run every single render');
  },[/*value*/]);

  useEffect(()=>{
    console.log('useEffect run only initial render it happens by passing the empty array.');
  },[]);

  return (
  <>
    <h1>{value}</h1>
    <button className='btn' onClick={()=>setValue( value + 1 )}>Click Me</button>
  </>
  );
};

export default UseEffectBasics;
