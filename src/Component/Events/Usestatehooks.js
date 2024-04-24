import React, { useState } from 'react'

const Usestatehooks = () => {
    const[name,setname]=useState("shoukath");
    const[count,setcount]=useState(0)
    const chanename=()=>{
        setname("shabeeth")
    }
    const increment=()=>{
        setcount(count+1)
    }
    const decrement=()=>{
        setcount(count-1)
    }
  return (
    <div>
      <h1>ma name is {name}</h1>
      <button onClick={chanename}>click meto change</button>
      <h2>count is {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default Usestatehooks

