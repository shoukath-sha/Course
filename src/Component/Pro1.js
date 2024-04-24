import React ,{useState} from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import '../Component/Pro1.css';


const Pro1 = () => {

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
                    {/* <button onClick={()=>handledelete(index)}>delete</button> */}

                    <CardGroup>
<Card>
  <Card.Body>
    <Card.Title>APPLE</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in
      to additional content. This content is a little bit longer.
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <small className="text-muted">Last updated 3 mins ago</small>
  </Card.Footer>
</Card>

<Card>
  <Card.Body>
    <Card.Title>KIWI</Card.Title>
    <Card.Text>
      This card has supporting text below as a natural lead-in to
      additional content.
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <small className="text-muted">Last updated 3 mins ago</small>
  </Card.Footer>
</Card>

<Card>
  <Card.Body>
    <Card.Title>ORANGE</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in
      to additional content. This card has even longer content than the
      first to show that equal height action.
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <small className="text-muted">Last updated 3 mins ago</small>
  </Card.Footer>
</Card>
</CardGroup>




                </li>
            ))
        }

    </ul>


  
</div>
  )
}

export default Pro1





