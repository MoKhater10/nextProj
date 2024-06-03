import Link from "next/link";
import { Fragment } from "react";

export default function F1() {
  return (
    <Fragment>
    <div>F1 Page</div>
    <Link href="/f1/f2">To F2</Link>
  </Fragment>
  )
}
