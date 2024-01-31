import NextAuth from "next-auth";

export interface User {
  name: string
  role?: string;
  phone?: string;
  token?: string;
  avatar?: string;
  id: number;
  updatedAt: string;
}

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: User;
  }
}
