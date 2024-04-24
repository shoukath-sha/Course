import React from 'react'
import './Shoukath.css';
import { Button,Badge } from 'react-bootstrap';

function shoukath() {
  return (
    <div>
      <h1 className='first'> hi shoukath</h1>
      <Button variant="primary">submit</Button>{' '}
      <h1>
        Example heading <Badge bg="secondary">New</Badge>
      </h1>
    </div>
  )
}

export default shoukath
