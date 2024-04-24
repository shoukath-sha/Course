import React, {useState} from 'react'
const products=[
    {id:1,item:"fruits",name:"apple",Qty:2},
    {id:2,item:"fruits",name:"banana",Qty:5},
    {id:3,item:"fruits",name:"fig",Qty:4},
    {id:4,item:"fruits",name:"choco",Qty:0}
]

const Reactkeys = () => {
    const [count,setCount]=useState(products);
    const changeqty =(id)=>{
        const shebi=count.map((item)=>
    item.id === id? {...item,Qty:item.Qty + 1}:item);
    setCount(shebi)
    }
  return (
    <div>
        {count.map((product)=> (
            <div key ={product.id}>
                 
                <h1>{product.item}</h1>
                <h1>{product.name}</h1>
                <h1>{product.Qty}</h1>
                <button onClick={()=>changeqty(product.id)}>+</button>
            </div>
        ))}
      
    </div>
  )
}

export default Reactkeys
