import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { emailOTP } from "better-auth/plugins";
import { prisma } from "./db";
import { env } from "./env";
import { resend } from "./resend";

export const auth = betterAuth({
  database: prismaAdapter(prisma, { provider: "postgresql" }),
  socialProviders: {
    github: {
      clientId: env.AUTH_GITHUB_CLIENT_ID,
      clientSecret: env.AUTH_GITHUB_CLIENT_SECRET,
    },
  },
  plugins: [
    emailOTP({
      async sendVerificationOTP({ email, otp }) {
        await resend.emails.send({
          from: "Skillera <no-reply@skillera.site>",
          to: [email],
          subject: "Skillera - Verify your email",
          html: `
            <div>
              <p>Please enter this OTP to verify your email.</p>
              <p>OTP is - <strong>${otp}</strong></p>

              <strong>Note: The code expires in 5 mins.</strong>
            </div>
          `,
        });
      },
    }),
  ],
});
