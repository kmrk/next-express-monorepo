FROM node:21-alpine AS base
 
FROM base AS deps
RUN apk add --no-cache libc6-compat python

FROM base AS runner
WORKDIR /app

COPY package.json ./
RUN npm install -g pnpm pm2 --registry=https://registry.npmmirror.com
COPY . .
RUN pnpm install --registry=https://registry.npmmirror.com


#CMD pnpm build
CMD pnpm dev


# maybe two dockerfile? I use pm2 not docker for nextjs production