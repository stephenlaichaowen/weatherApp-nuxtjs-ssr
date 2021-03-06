# Project name: Weather App

This App is built with Nuxtjs framework, I use its SSR (Server Side Render) feature to build this fullstack app. The main purpose it to demonstrate hiding the api key from end users, because we know if we want to hide sensitve data such as api key (especially you paid for it), you have to it in backend. Nuxtjs integrates nodejs backend so we can easily handle both frontend and backend in the same project and deploy to a single server which makes life much easier.

---

The home page component connects to `openweathermap` website,  retrieving current weather data then rendered on web page. In order to make it run you have to do the following steps.

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

I have tried to deploy this app to _*Vercel*_, _*Heroku*_, and _*Glitch*_





