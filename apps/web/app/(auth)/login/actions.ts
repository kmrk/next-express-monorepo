'use server';
import { login } from "@repo/shared";
import { Cookie } from 'lucia';
import { cookies } from "next/headers";


export const doLogin = async (phone: string, password: string) => await login({
  phone: phone,
  password: password
}, (sessionCookie: Cookie) => {
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );
});