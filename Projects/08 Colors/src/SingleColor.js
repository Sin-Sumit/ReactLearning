import React, { useState, useEffect } from 'react'
// import rgbToHex from './utils'

const SingleColor = ({rgb,weight,index,hexColor}) => {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(',');
  // const hex = rgbToHex(...rgb)
  const hexValue = `#${hexColor}`;
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setAlert(false);
    },3000)
    return ()=>clearTimeout(timer);
  },[alert])
  return (
  <article className={` ${index > 10 ? 'color-light' : 'color' }`} style={{background: `rgb(${bcg})`}} onClick={()=>{setAlert(true);navigator.clipboard.writeText(hexValue);}}>
    <p className='percent-value'>{weight}%</p>
    <p className='color-value'>{hexValue}</p>
    {alert && <p className={`${index>10 ? 'alert-light' : 'alert'}`}>copied to clipboard</p>}
  </article>
    )
}

export default SingleColor
