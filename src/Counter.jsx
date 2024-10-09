import React from 'react'
import './counter.css'
import { useState } from 'react'
const Counter = () => {
    const [count,setCount]=new useState(0);
  return (
    <div className='counter'>
      <h1>Counter App</h1>
      <p>You Clicked Me {count} times.</p>
      <button className='button1' onClick={()=>{setCount(count+1)}}>incre</button>
      <button className='button2' onClick={() => {setCount(count-1)}}>decre</button>
    </div>
  )
}

export default Counter
