// import React from 'react'

export default function reviewDetails({params} : {params : {productId:string,reviewId:string}}) {
    return (
      <h1>product {params.productId} reviewDetails {params.reviewId}</h1>
    )
  } 
  