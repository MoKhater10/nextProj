"use client";
import { notFound } from "next/navigation";
function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}
export default function reviewDetails({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  // const random = getRandomInt(2);
  // if (random === 1) {
  //   throw new Error("errrrrrrrrrrrrrrrrrrr");
  // }
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }

  return (
    <h1>
      product {params.productId} reviewDetails {params.reviewId}
    </h1>
  );
}
