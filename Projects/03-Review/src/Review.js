import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0)
  const {name, job, image, text} = people[index]
  const negativeHandle = () => {
    let newIndex = index - 1
    if (newIndex < 0){
      newIndex = people.length - 1
    }
    setIndex(newIndex)
  }
  return (
      <article className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
          <span className='quote-icon'>
            <FaQuoteRight/>
          </span>
        </div>
        
          <h3 className='author'>{name}</h3>
          <h3 className='job'>{job}</h3>
          <p className='info'>{text}</p>
        <div className='button-container'>
          <button className='prev-btn'>
            <FaChevronLeft onClick={negativeHandle} />
          </button>
          <button className='next-btn'>
            <FaChevronRight onClick={()=>setIndex((index+1)%people.length)} />
          </button>
        </div>
  </article>
    );
};

export default Review;
