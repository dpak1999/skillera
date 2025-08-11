import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center">
      <div className="flex w-full flex-col gap-6 max-w-sm">{children}</div>
    </div>
  );
}
