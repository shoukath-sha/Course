import React, {useState} from 'react';
import '../Component/Remainder.css';

const Remainder = () => {
    const[remainder,setRemainder]=useState([])
    const[newremainder,setNewRemainder]=useState("")
    const handleinput=(event)=>{
        setNewRemainder(event.target.value)
    }

    const handledelete =(index)=>{
        setRemainder(remainder.filter((item,itemIndex)=>itemIndex != index))
    }
    const handlebutton=()=>{
        if(newremainder.trim()){
            setRemainder([...remainder,newremainder])
            setNewRemainder("")
        }
    }
  return (
    <div className='container'>
        <h1>remainder app</h1>
        <div className='input'>
            <input type='text' placeholder='enter a remainder' onChange={handleinput}></input>
            <button className='button' onClick={handlebutton}>add our remainder</button>

        </div>

        <ul className='list'>
            {
                remainder.map((remainder,index)=>(
                    <li>
                        {remainder}
                        <button onClick={()=>handledelete(index)}>delete</button>
                    </li>
                ))
            }

        </ul>


      
    </div>
    
  )
}

export default Remainder
