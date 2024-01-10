# IdentiFy - Your Spotify Music Identifier

## THIS PROJECT NOT YET REVIEWED TO GET EXTENSION REQUESTS BY SPOTIFY,
So logging in via deployment link not work, if you want to open this project, consider clone to your machine instead.

## Project Description

What is Identify?
Identify can generate an ID card for you based on your listening
habits on Spotify. The web app takes the five track features from
each track from your top tracks on Spotify, which are Happiness,
Danceability, Speechiness, Accousticness, and Energy. Webs like
obscurify and receiptify inspired the creation of this website, so
huge props and shoutouts to the creators of those websites!🙌🏼

## Project Goals

The goal of the creation of this website is for the creators of
this website to showcase the implementation of Spotify Web
API's features such as authorization and API consumption.
Some examples of API consumption include getting user's
spotify data, user's top tracks and audio features, and
user's top items. The data is provided by Spotify API through
OAuth which was made possible by utilizing NextAuthJS. For the
front-end, we use NextJS and for the server state handilng, we use
TanStack Query (React Query).

## Privacy Policy

We as developers don't keep any forms of user's personal
data since those data are handled securely by Spotify API. The
source code for this website is available for the public to see on
the GitHub repository that we have provided.

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

Spin up local development server

```bash
npm run dev
```

## Tech Stack

**Client:** Next.js, TailwindCSS, NextUI, framer-motion, next-themes, shadcn-ui, React-Query, NextAuth.js

**Server:** Spotify Web API

## Authors

- [@Aliezan](https://www.github.com/Aliezan)
- [@afrianluthfan](https://www.github.com/afrianluthfan)
