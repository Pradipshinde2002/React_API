import React, { useState } from 'react'
import HOC from './HOC'

function A(props) {
    const{count,incrementHandler,name}=props

  return (
    <div>
        <button onClick={incrementHandler}>Click {count}{name} times</button>
    </div>
  )
}

export default HOC(A,10)