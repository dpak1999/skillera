import arcjet, {
  fixedWindow,
  detectBot,
  sensitiveInfo,
  protectSignup,
  shield,
  slidingWindow,
} from "@arcjet/next";
import { env } from "./env";

export {
  fixedWindow,
  detectBot,
  sensitiveInfo,
  shield,
  protectSignup,
  slidingWindow,
};

export default arcjet({
  key: env.ARCJET_KEY,
  characteristics: ["fingerprint"],
  rules: [
    shield({
      mode: "LIVE",
    }),
  ],
});
