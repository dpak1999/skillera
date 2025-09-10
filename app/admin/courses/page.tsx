import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function CoursePage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Your courses</h1>

        <Link className={buttonVariants()} href={"/admin/courses/create"}>
          Create Course
        </Link>
      </div>

      <div>
        <h1>Here you will see all your courses</h1>
      </div>
    </>
  );
}
