const {leds} = require('./ledConfig')

function switchActiveLed(activeLed) {
  leds.filter(led => led !== activeLed).map(led => led.writeSync(0))
  activeLed.writeSync(1)
}

function getLedDisplayByTemperature(degrees) {
  const isBelowZero = Number(degrees) < 0
  const isMoreThanTwenty = Number(degrees) > 12
  const activeLed = isBelowZero ? redLed : isMoreThanTwenty ? greenLed : yellowLed 
  switchActiveLed(activeLed)
}

module.exports = {
  getLedDisplayByTemperature
}