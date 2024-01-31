import { Lucia } from "lucia";
import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";
import { db } from "../db";
import { sessions, users } from "../db/schema";
import { UserSchema } from "../data";

const adapter = new DrizzlePostgreSQLAdapter(db, sessions, users);

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      // set to `true` when using HTTPS
      secure: process.env.NODE_ENV === "production"
    },
  },
  getUserAttributes: (attributes) => {
    return {
      name: attributes.name,
      phone: attributes.phone,
      avatar: attributes.avatar
    };
  }
});

// IMPORTANT!
declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
    DatabaseUserAttributes: Omit<UserSchema, "id" | "password">;
  }
}


export * from './action';