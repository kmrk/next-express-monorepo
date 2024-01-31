
import { useSession } from 'next-auth/react';
import { cache } from 'react';


const getBaseUrl = //cache(
  () => `${process.env.SERVER || "http://localhost"}:${process.env.PORT || "3000"}`
//)


export { getBaseUrl, }
