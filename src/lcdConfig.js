const Lcd = require('lcd')

const lcd = new Lcd({
    rs: 20,
    e: 21,
    data: [16, 12, 7, 8],
    cols: 10,
    rows: 4,
})

module.exports = {
  lcd
}