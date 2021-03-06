# Project name: Weather App

This App is built with Nuxtjs framework, I use its SSR (Server Side Render) feature to build this fullstack app. The main purpose it to demonstrate hiding the api key from end users, because we know if we want to hide sensitve data such as api key (especially you paid for it), we have to it in backend. Nuxtjs integrates nodejs backend so we can easily handle both frontend and backend in the same project and deploy to a single server which makes life much easier.

---

The home page component connects to `openweathermap` website,  retrieving current weather data then render on web page. In order to make it run you have to do the following steps.

- Rename `env.local` to `.env`
- Generate an API key at `https://openweathermap.org/`
- Add your API key to `.env` 

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm start
```

## Deploy to Hosting Services

### Netlify

The first hosting service came up to me is Vercel, the most versatile hosting platform for developers, it is not only free but has very powerful feature that it automatically detects the project type, it knows which framework/technology you use after you import your project from Github to Vercel and performs auto setup for you so we don't need to do extra setting which is pretty amazing.

But it is not perfect, it does take fullstack app such as Nextjs. However Nextjs api routes use serverless function provided by AWS, is different from traditional backend setup. meaning `npm start` is not wokring on Vercel because dynamic operation is not allowed. So this option is not applicable, let us move on to next option.

### Heroku

I guess because I am not a paid member so they restrict me deploy web app on their platform, I have tried many different apps but just not working so I quit.

### Glitch

I have successfully upload Github project to _*Glitch*_ and build successfully. However backend does not get response from `https://openweathermap.org/` so it is not working either. I have Googleed the solution and found seems _*Digital Ocean*_ is a great solution. So it is time
to shift to _*Digital Ocean*_ !!!






