'use server';
import { Cookie } from 'lucia';
import { cookies } from "next/headers";
import { login } from '@repo/shared/auth';

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



