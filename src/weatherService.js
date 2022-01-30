const fetch = require('node-fetch')
require('dotenv').config({path: '../.env'})
const {kelvinToCelcius} = require('./utils')

async function getCurrentWeather(city) {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}`)
  const data = await res.json()
  const {temp, pressure} = data.main
  return ({
    temp: `${kelvinToCelcius(temp)} C`, 
    pressure: `${pressure} hPa`
  })
}

module.exports = {
  getCurrentWeather
}