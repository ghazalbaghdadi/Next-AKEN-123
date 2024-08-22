import React from 'react'

function page({params}) {
  if (params.productId>50) {
    throw new Error("you reached the numbers");
  }
  return (
    <h1>Details product about {params.productId}</h1>
  )
}

export default page