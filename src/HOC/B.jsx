import React from 'react'
import HOC from './HOC'

function B(props) {
    const{count,incrementHandler,name}=props

  return (
    <div>
        <div>
        <button onMouseOver={incrementHandler}>Click {count} times{name}</button>
       </div>
    </div>
  )
}

export default HOC(B,5)