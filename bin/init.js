const yaml = require('js-yaml')
const aux = require('./aux.js')
const fs = require('fs')
const printmessage = require('print-message')

let data = {
  title: '',
  subtitle: '',
  author: '',
  rights: '',
  language: '',
  publisher: '',
  "cover-image": 'cover.jpg'
}

const localbookYaml = {
  output: 'book',
  chapter: 0
}

function init() {

  if (!fs.existsSync(aux.bookconf)){
    aux.notExists(aux.bookconf)
    process.exit(1)
  }

  if (fs.existsSync(aux.localbook)){
    aux.errormsg(aux.localbook)
  } else {
    // write aux.localbook
    const yy = yaml.safeDump(localbookYaml)
    fs.writeFileSync(aux.localbook, yy)
  }

  if (fs.existsSync(aux.titlefile)) {
    aux.errormsg(aux.titlefile)
  } else {
    // write aux.titlefile
    const doc = yaml.safeLoad(fs.readFileSync(aux.bookconf, 'utf8'))
    data.author = doc.author
    data.rights = doc.rights
    data.language = doc.language
    data.publisher = doc.publisher
    const yl = yaml.safeDump(data)
    const content = '---\n' + yl + '---\n'
    fs.writeFileSync(aux.titlefile, content)
  }

}

module.exports = {
  exec: init
}
