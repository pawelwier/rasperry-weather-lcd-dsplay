const Gpio = require('onoff').Gpio

const outputs = [10, 17, 18]

const leds =  [redLed, yellowLed, greenLed] = outputs.map(output => new Gpio(output, 'out'))

module.exports = {
  leds
}