FROM node:20-alpine

WORKDIR /app

RUN npm install -g pnpm@10.13.1

COPY package.json pnpm-lock.yaml* ./

RUN pnpm install

COPY . .

RUN pnpm run build

EXPOSE 8080

CMD ["pnpm", "run", "serve"]
