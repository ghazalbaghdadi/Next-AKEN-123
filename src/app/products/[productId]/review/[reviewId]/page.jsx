import React from 'react'

function page({params}) {
  return (
    <h1>Review {params.reviewId} for product {params.productId} : Fine !</h1>
  )
}

export default page