import { validateRequest } from '../(auth)/login/validate-request';
import { redirect } from 'next/navigation';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {

  const session = await validateRequest();
  if (!session.user) redirect("/login");

  console.log("user:", session.user);

  return (
    <>
      {children}
    </>
  );
}
