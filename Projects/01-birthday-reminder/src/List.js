import React from 'react';

const List = ({people}) => {
  return (
    <>
      {people.map((bdayb)=>{
      return ( <div key={bdayb.id} className='person'>
        <img src={bdayb.image} alt={bdayb.name} />   
        <div>
        <h3>{bdayb.name}</h3>
        <p>{bdayb.age}</p>
        </div>     
      </div>
      );
    })}
    </>
  );
};

export default List;
