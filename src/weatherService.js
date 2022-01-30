const fetch = require('node-fetch')
require('dotenv').config({path: '../.env'})

async function getCurrentWeather() {
  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${process.env.CITY_NAME}&appid=${process.env.WEATHER_API_KEY}`)
    const data = await res.json()
    const {main, weather} = data
    const {temp, pressure, humidity} = main
    return ({
      temp, 
      pressure,
      humidity,
      description: weather[0].main,
    })
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  getCurrentWeather
}