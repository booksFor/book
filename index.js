#!/usr/bin/env node

const help = require('./bin/help.js')
const conf = require('./bin/conf.js')
const init = require('./bin/init.js')
const add = require('./bin/add.js')
const html = require('./bin/html.js')
const doc = require('./bin/doc.js')
const pdf = require('./bin/pdf.js')
const epub = require('./bin/epub.js')
const mobi = require('./bin/mobi.js')
const all = require('./bin/all.js')
const aux = require('./bin/aux.js')

const argv = require('minimist')(process.argv.slice(2))
const command = argv._

const func = (command.indexOf('help') != -1) ? help  :
  (command.indexOf('conf') != -1) ? conf  :
  (command.indexOf('init') != -1) ? init  :
  (command.indexOf('add')  != -1) ? add   :
  (command.indexOf('html') != -1) ? html  :
  (command.indexOf('doc')  != -1) ? doc   :
  (command.indexOf('pdf')  != -1) ? pdf   :
  (command.indexOf('epub') != -1) ? epub  :
  (command.indexOf('mobi') != -1) ? mobi  :
  (command.indexOf('all')  != -1) ? all   :
  help

if (command.indexOf('help') != -1 || 
  command.indexOf('conf') != -1 ||
  command.indexOf('init') != -1) {

  func.exec()
} else {
  aux.isBook()
  aux.hasCover()
  aux.hasTitle()

  func.exec()
}
