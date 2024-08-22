'use client'
import React, { useState } from 'react'
import Users from './Users'

function Counter({children}) {
const [count , setCount] = useState(0)

  return (
    <>
    <button onClick={()=>setCount(count+1)}>{count}</button>
    {/* <Users/> */}
    {children}
    </>
  )
}

export default Counter