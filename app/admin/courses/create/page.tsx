import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CreateCoursePage() {
  return (
    <>
      <div className="flex items-center gap-4">
        <Link
          className={buttonVariants({
            variant: "outline",
            size: "icon",
          })}
          href={"/admin/courses"}
        >
          <ArrowLeft className="size-4" />
        </Link>

        <h1 className="text-2xl font-bold">Create course</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Basic information</CardTitle>
          <CardDescription>
            Provide basic information about the course
          </CardDescription>
        </CardHeader>
      </Card>
    </>
  );
}
