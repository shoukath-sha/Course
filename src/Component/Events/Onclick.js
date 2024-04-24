import React from 'react'


const Onclick = () => {
    const click=()=>{
        alert("you clicked me")
    }
    const onchange=()=>{
        alert ("you are in right path")
    }
  return (
    <div>
        <input onChange={onchange} type="text"/>
      <button onDoubleClick={click} >click me</button>
    </div>
  )
}

export default Onclick


