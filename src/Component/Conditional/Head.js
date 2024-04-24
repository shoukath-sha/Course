import React from 'react'
import Log from './Log'
import Nonlog from './Nonlog'

const Head = ({islogged}) => {
  return (
    <div>
     {islogged?<Log /> :<Nonlog/>} 
    </div>
  )
}

export default Head
