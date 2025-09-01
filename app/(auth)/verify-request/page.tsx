"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { authClient } from "@/lib/auth-client";
import { Loader2Icon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";

export default function VerifyRequest() {
  const [otp, setOtp] = useState("");
  const [verificationPending, startTransition] = useTransition();

  const params = useSearchParams();
  const router = useRouter();

  const verifyOtp = () => {
    startTransition(async () => {
      await authClient.signIn.emailOtp({
        email: params.get("email") as string,
        otp,
        fetchOptions: {
          onSuccess() {
            toast.success("Email verified successfully");
            router.push("/");
          },
          onError() {
            toast.error("Email verification failed");
          },
        },
      });
    });
  };

  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Please check your email</CardTitle>
        <CardDescription>
          We have send a verification code to your email address. Please enter
          your code to proceed with verification.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="flex flex-col items-center space-y-2">
          <InputOTP
            maxLength={6}
            className="gap-2"
            value={otp}
            onChange={(v) => setOtp(v)}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <p className="text-sm text-foreground">
            Enter the 6 digit code sent to your email.
          </p>
        </div>

        <Button
          onClick={verifyOtp}
          disabled={verificationPending || otp.length !== 6}
          className="w-full"
        >
          {verificationPending ? (
            <Loader2Icon className="size-4 animate-spin" />
          ) : (
            "Verify Account"
          )}
        </Button>
      </CardContent>
    </Card>
  );
}
