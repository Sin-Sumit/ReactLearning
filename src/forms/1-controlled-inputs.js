import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName,setFirstName] = useState('')
  const [email,setEmail] = useState('')
  const [people,setPeople] = useState([])
  const handleSubmit =(e) => {
    e.preventDefault();
    if (firstName && email){
      const person = { firstName, email };
      setPeople([...people,person])
      setFirstName('');
      setEmail('');
    } 
  }
  return (<>
    <article>
      <form className='form'>
        <div className='form-control'>
          <label htmlFor='firstName'>Name: </label>
          <input type='text' id='firstName' name='firstName' 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email: </label>
          <input type='text' id='email' name='email' 
            vlaue={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type='submit' onClick={handleSubmit}>add person</button>
      </form>
    </article>
  </>);
};

export default ControlledInputs;
