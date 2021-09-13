import React, { useState } from 'react';

const UseStateObject = () => {
  const [person,setPerson] = useState(
    {
      name:'sumit', 
      age: 22, 
      message:' hello useState object'
  });
  const changeMessage = (message) => {
    if (message === ' hello useState object')
      setPerson({...person, message:'hello world'});
    else
      setPerson({...person, message:' hello useState object'})
  }
  return (
    <>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <h3>{person.message}</h3>
      <button type='button' className='btn' onClick={()=>changeMessage(person.message)}>change message</button>
    </>
  );
};

export default UseStateObject;
