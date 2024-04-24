import React,{useState,UseEffect} from 'react'



const Useeffect = () => {
    const [counter,setcounter]=useState(0)
    const [counter1,setcounter2]=useState(0)

    UseEffect(()=>{
        console.log("hello")
    },[counter])

  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={()=>setcounter(counter+1)}>+</button>

        <h1>{counter1}</h1>
        <button onClick={()=>setcounter2(counter1+1)}>+</button>
       
      
    </div>
  )
}

export default Useeffect

