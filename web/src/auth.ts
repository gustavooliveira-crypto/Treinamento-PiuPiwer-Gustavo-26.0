import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./app/(backend)/services/db";

import { customSession } from "better-auth/plugins";
import { getUserRole } from "@/backend/services/auth";
import { expo } from "@better-auth/expo";

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
  database: prismaAdapter(prisma, {
    provider: "mongodb",
  }),
  emailAndPassword: {
    enabled: true,
  },
  user: {
    deleteUser: {
      enabled: true,
    },
    changeEmail: {
      enabled: true,
    },
  },
  plugins: [
    expo(),
    customSession(async ({ user, session }) => {
      const role = await getUserRole(session.userId);
      return {
        role,
        user,
        session,
      };
    }),
    nextCookies(),
  ],
  trustedOrigins: [
    "noctiluz://",
    "noctiluz://*",
    "https://treinamento-piu-piwer-gustavo-26-0.vercel.app",
    "http://localhost:3000",
    "http://localhost:3002",
  ],
});