const express = require('express')
const qs = require('qs')
const axios = require('axios')
// const fetch = require('unfetch')

const app = express()

const apiKey = process.env.API_KEY
const apiUrl = 'http://api.openweathermap.org/data/2.5/weather'

app.get('/api', (req, response) => {
  // console.log(req.query)

  response.set('Access-Control-Allow-Origin')
  
  let query = req.query
  query.appid = apiKey

  let queryString = qs.stringify(query)
  // console.log(queryString)

  axios(`${apiUrl}?${queryString}`)
  .then(res => {
    console.log(res.data)
    response.send(res.data)
  })
})

module.exports = app