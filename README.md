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

I have tried many times deploying this app on Heroku but just not working, building process is successful without errors, but the page just cannot be rendred. When I was about to give up, It came to me that Nuxtjs [document](https://nuxtjs.org/docs/2.x/deployment/heroku-deployment) has instructions on how to deploy Nuxtjs app to Heroku, then I realized I missed some steps. 
After following the instructions then I finally got this app working. Very happy to nail it. 😁😁😁

### Reference

[Vue JS 3: Hide your API Key with Node.js, Express & Dotenv](https://www.youtube.com/watch?v=47pHZYtciEs&t=1749s)




