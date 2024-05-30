// import React from 'react'

import Link from "next/link";

export default function Products() {
  return (
    <div>
      <Link href="/">Home</Link>
      <h1>Products</h1>
      <h1>
        {" "}
        <Link href="products/1">product 1</Link>{" "}
      </h1>
      <h1>
        <Link href="products/2">product 2</Link>
      </h1>
      <h1>
        <Link href="products/3">product 3</Link>{" "}
      </h1>
    </div>
  );
}
