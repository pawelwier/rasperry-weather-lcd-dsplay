const {format} = require('date-fns')
const {getCurrentWeather} = require('./weatherService')
const {lcd} = require('./lcdConfig')

async function displayLcd() {
  setInterval(async () => {
    const {temp, pressure} = await getCurrentWeather('Lodz')
    const date = new Date()
    lcd.print(`${temp}, ${pressure}`, () => {
      lcd.setCursor(0, 1)
      lcd.print(format(date, 'HH:mm:ss'))
    })
    lcd.setCursor(0, 0)
  }, 1000)
  
}

displayLcd()