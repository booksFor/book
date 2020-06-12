const yaml = require('js-yaml')
const aux = require('./aux.js')
const prompt = require('readline-sync')
const fs = require('fs')

const pdfConvert = ["tectonic", "pdflatex", "xelatex", "lualatex", "pdfroff", "wkhtml2pdf", "prince", "weasyprint"]

let data = {
  kindlegen: aux.homedir + '/kindlegen/kindlegen',
  pdf: '',
  author: '',
  rights: 'All rights reserved',
  language: 'en',
  publisher: ''
}

function get(data){

  const kindlegen = prompt.question(`Where is the kindlegen file ("${data.kindlegen}")?: `) || data.kindlegen || aux.kindlegen

  let value = prompt.keyInSelect(pdfConvert, `Which pdf engine are you using ("${data.pdf}")?: `)

  let pdf = ''

  if (value === -1) {
    pdf = ''
  } else {
    pdf = pdfConvert[value]
  }

  pdf = pdf || data.pdf || 'tectonic'
  const author = prompt.question(`Your name (${data.author}): `) || data.author
  const rights = prompt.question(`Rights to books (${data.rights}): `) || data.rights || 'All rights reserved'
  const language = prompt.question(`Language (${data.language}): `) || data.language || 'en'
  const publisher = prompt.question(`Publisher (${data.publisher}): `) || data.publisher

  data.kindlegen = kindlegen
  data.pdf = pdf
  data.author = author
  data.rights = rights
  data.language = language
  data.publisher = publisher

  return data
}

function conf() {
  let yy // for yaml
  try {
    let doc = yaml.safeLoad(fs.readFileSync(aux.bookconf, 'utf8'))
    doc = get(doc)
    yy = yaml.safeDump(doc)
    fs.writeFileSync(aux.bookconf, yy)
  } catch(err) {
    data = get(data)
    yy = yaml.safeDump(data)
    fs.writeFileSync(aux.bookconf, yy)
  }
}


module.exports = {
  exec: conf
}
