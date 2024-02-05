monorepo template for personal use.

* global find @repo/ replace with proper packege space name
* pnpm install
* cd docker && docker compose up # start dev db 
* pnpm db:sync # sync basic db store
* pnpm --filter web dev 
* pnpm --filter admin dev

* pm2 express.js

refrence:
- libs : `nextjs` `drizzle` `lucia-auth` `express` `tailwind` `fp-ts` `io-ts` `io-ts-types`
- tools: `pnpm` `tsup` `tsx`
