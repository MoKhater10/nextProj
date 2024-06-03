import Link from "next/link";
import { Fragment } from "react";

export default function F4() {
  return (
    <Fragment>
    <div>F4 Page</div>
    <Link href="/f1/f3">To F3</Link>
    <Link href="/about">About</Link>
  </Fragment>
  )
}
