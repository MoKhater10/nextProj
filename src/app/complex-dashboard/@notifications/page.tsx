import Card from "@/components/Card";
import Link from "next/link";

export default function Notifications() {
  return (
    <Card>
      {" "}
      <div>Notifications page</div>
      <Link href="/complex-dashboard/archieved">Archived Notification</Link>
    </Card>
  );
}
