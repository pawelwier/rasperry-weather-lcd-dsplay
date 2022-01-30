
const {format} = require('date-fns')
const {getCurrentWeather} = require('./weatherService')
const {getLedDisplayByTemperature} = require('./ledService')
const {lcd} = require('./lcdConfig')
const {kelvinToCelcius} = require('./utils')

const INTERVAL = 1000 

async function displayLcd() {
  let interval = 0
  let weatherDecription, temperature, airPressure, airHumidity
  setInterval(async () => {
    // refresh weather data every 5 minutes
    if (!interval || interval >= 300) {
      const {temp, pressure, humidity, description} = await getCurrentWeather()
      temperature = temp
      airPressure = pressure
      airHumidity = humidity
      weatherDecription = description
      interval = 0
    }
    const date = new Date()
    const temperatureCelcius = kelvinToCelcius(temperature)
    lcd.print(format(date, 'HH:mm:ss'), () => {
      lcd.setCursor(0, 1)
      lcd.print(`${temperatureCelcius} C, ${airPressure} hPa`, () => {
        lcd.setCursor(0, 2)
        lcd.print(`Humidity: ${airHumidity}%`, () => {
          lcd.setCursor(0, 3)
          lcd.print(weatherDecription)
          getLedDisplayByTemperature(temperatureCelcius)
        })
      })
    })
    lcd.setCursor(0, 0)
    interval++
  }, INTERVAL)
  
}

displayLcd()