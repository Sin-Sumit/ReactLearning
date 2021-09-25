import React, { useState, useEffect} from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({id,title,info}) => {
  const [passinfo, setPassInfo] = useState('')
  const handleClick = () => {
    if (passinfo === ''){
      setPassInfo(info)
    }
    else{
      setPassInfo('')
    }
  }
  // useEffect(() => {
  //   handleClick();
  // },[])
  return (
  <article className='question'>
    <header>
      <h4>{title}</h4>
      <button className='btn' onClick={handleClick}>
        {passinfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </button>
    </header>
    <p>{passinfo}</p>
  </article>
    );
};

export default Question;
