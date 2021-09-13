import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [array, setArray] = React.useState(data);
  const removeItem = (id) => {
    let newArray = array.filter((person) => person.id!==id);
    setArray(newArray);
  }
  return (
    <React.Fragment>
      {array.map((person)=>{
        const {id, name} = person;
        return (
          <div key={id} className='item'>
            <h3>{name}</h3>
            <button type='button' className='btn' onClick={()=>removeItem(id)}>Delete</button>
          </div>
        );
      })}
      <button type='button' className='btn' onClick={()=>setArray([])}>Clear All Items</button>
    </React.Fragment>
    );
};

export default UseStateArray;
