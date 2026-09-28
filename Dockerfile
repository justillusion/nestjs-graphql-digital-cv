FROM node:24-alpine
RUN corepack enable
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm db:generate && pnpm build

EXPOSE 3000
CMD ["sh", "-c", "pnpm prisma migrate deploy && pnpm db:seed && node dist/main"]
