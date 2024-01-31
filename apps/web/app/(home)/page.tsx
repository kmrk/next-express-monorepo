import { testServer } from "@repo/next";
import { Button } from "@repo/react";
import { validateRequest } from '../(auth)/login/validate-request';

import { logout } from '@repo/shared';

export default async function Home() {

  console.log(testServer());
  const session = await validateRequest();
  const doLogout = () => {
    logout(session.session?.id!);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">


      <Button appName="web" className="text-red-400 bg-blue-700">
        from @repo/react/Button Click me!
      </Button>


      {JSON.stringify(session?.user)}

      <br />
      call `doLogout` logout the session
    </main >
  );
}
