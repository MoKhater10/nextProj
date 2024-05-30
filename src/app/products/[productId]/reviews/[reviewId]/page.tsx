// import React from 'react'
import { notFound } from "next/navigation"
export default function reviewDetails({params} : {params : {productId:string,reviewId:string}}) {
  if (parseInt(params.reviewId) > 1000){
    notFound();
  }
    return (
      <h1>product {params.productId} reviewDetails {params.reviewId}</h1>
    )
  } 
  