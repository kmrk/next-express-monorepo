'use server';

import { cookies } from 'next/headers';

export const testServer = () => {
  console.log(cookies);
};
