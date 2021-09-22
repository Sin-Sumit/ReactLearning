import React, { useState } from 'react';
import data from './data';
import List from './List';
const App = () => {
  const [people,setPeople] =useState(data)
  const handleClick = ()=> {    
    setPeople([]);
    // value='0 birthday today';
  }
  return (
  <main>
  <section className='container'>
  <h3>{people.length} Birthday's Today</h3>
    <List people={people}/>
    <button onClick={handleClick}>Clear All</button>
  </section>
    
  </main>);
}

export default App;
