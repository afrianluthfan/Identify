# IdentiFy - Your Spotify Music Indentifier

## Project Description

TODO

## Run Locally

Clone the project

```bash
https://github.com/Aliezan/identiFy.git
```

Go to the project directory

```bash
cd identiFy
```

Install the project's dependencies

```bash
npm i
```

Specify the environment variables values in .env.sample and then run this command

```bash
cp .env.sample env
```

Spin up the local PostgreSQL server using docker-compose

```bash
docker compose up -d
```

Run the prisma migration command to sync the schema with the db

```bash
npx prisma migrate dev
```

Run the prisma generate command

```bash
npx prisma generate
```

Spin up local development server

```bash
npm run dev
```

## Tech Stack

**Client:** Next.js, TailwindCSS, NextUI, framer-motion, next-themes, shadcn-ui, React-Query, NextAuth.js

**Server:** tRPC, PostgreSQL, docker-compose, Spotify Web API

## Authors

- [@Aliezan](https://www.github.com/Aliezan)
- [@afrianluthfan](https://www.github.com/afrianluthfan)
