import * as E from "fp-ts/Either";
import * as jose from 'jose'
import * as TE from "fp-ts/TaskEither";
import { pipe } from "fp-ts/lib/function";


export async function signJwtAccessToken(payload: any) {
  const secret_key = process.env.SECRET_KEY;
  const alg = 'HS256'

  const jwt = await new jose.SignJWT(payload)
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setIssuer('urn:example:issuer')
    .setAudience('urn:example:audience')
    .setExpirationTime('60d')
    .sign(new TextEncoder().encode(secret_key));

  return jwt;
}

export const verifyJwt = async (token: string) => {
  const secret_key = process.env.SECRET_KEY;
  return await pipe(
    TE.tryCatch(
      () => jose.jwtVerify(token, new TextEncoder().encode(secret_key)),
      (e) => `jwt parse error ${e}`
    ),
  )()
}
