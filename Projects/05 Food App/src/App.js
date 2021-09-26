import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const allCategories = ['all', ...new Set(items.map((item)=>item.category))]
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)
  const filterItems = (category) => {
    if (category === 'all'){
      setMenuItems(items);
      return;
    }
    const newList = items.filter((itemMenu) => itemMenu.category === category);
    setMenuItems(newList);
  }
  return (
  <main>
  <section className='menu section'>
    <div className='title'>
      <h2>Our items</h2>
      <div className='underline'></div>
    </div>
    <Categories filterItems={filterItems} categories={categories}/>
    <Menu item={menuItems}/>
  </section>
  </main>);
}

export default App;
