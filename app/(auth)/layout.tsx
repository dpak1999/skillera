import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import Logo from "@/public/logo.svg";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center">
      <Link
        href={"/"}
        className={buttonVariants({
          variant: "outline",
          className: "absolute left-4 top-4",
        })}
      >
        <ArrowLeft className="size-4" />
        Back
      </Link>

      <div className="flex w-full flex-col gap-6 max-w-sm">
        <Link
          className="flex items-center gap-2 self-center font-medium"
          href={"/"}
        >
          <Image src={Logo} alt="skillera" />
          <span className="text-2xl">Skillera</span>
        </Link>
        {children}

        <div className="text-balance text-center text-xs text-muted-foreground">
          By clicking Continue, you agree to our{" "}
          <a
            href="https://www.termsfeed.com/live/0798557c-c518-461f-a7ee-ac75f121fdf9"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary underline hover:cursor-pointer"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="https://www.termsfeed.com/live/2ac6f570-0b19-4f79-a34d-df933040a76d"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary underline hover:cursor-pointer"
          >
            Privacy policy
          </a>
          .
        </div>
      </div>
    </div>
  );
}
