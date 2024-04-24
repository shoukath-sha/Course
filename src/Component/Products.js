import React, {useEffect , useState} from 'react'
import {button,Container} from 'react-bootstrap';

const Products = () => {
    const[posts,setPostapi]=useState([])
    useEffect(()=>{
        fetch('http://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => setPostapi(posts))
    },[])
  return (
    <div>
        <Container className='text-primary'>fetch api</Container>
        {posts.map((post)=>

        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )}

      
    </div>
  )
}

export default Products
