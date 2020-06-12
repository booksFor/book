const html = require('./html.js')
const doc = require('./doc.js')
const pdf = require('./pdf.js')
const epub = require('./epub.js')
const mobi = require('./mobi.js')

function all() {
  html.exec()
  doc.exec()
  pdf.exec()
  epub.exec()
  mobi.exec()
}

module.exports = {
  exec: all
}
