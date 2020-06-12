const yaml = require('js-yaml')
const printmessage = require('print-message')
const fs = require('fs')

const homedir = require('os').homedir()
const bookconf = homedir +'/.book.yaml'
const localbook = 'localbook.yaml'
const titlefile = 'title.txt'

function hasTitle() {
  var doc = yaml.safeLoadAll(fs.readFileSync(titlefile, 'utf8'));
  const title = doc[0].title
  if (title === '' || title === null){
    console.log('You need a title for your book')
    process.exit(1)
  }
}

function hasCover() {
  var doc = yaml.safeLoadAll(fs.readFileSync(titlefile, 'utf8'));
  const cover = doc[0]["cover-image"]
  if (!fs.existsSync(cover)){
    console.log('Your cover does not exists')
    process.exit(1)
  }
}

function pdfEngine() {
  var doc = yaml.safeLoad(fs.readFileSync(bookconf, 'utf8'));
  return doc.pdf
}

function output() {
  var doc = yaml.safeLoadAll(fs.readFileSync(localbook, 'utf8'));
  return doc[0].output
}

function kindlegen() {
  var doc = yaml.safeLoad(fs.readFileSync(bookconf, 'utf8'));
  return doc.kindlegen
}

function kindleExists(){
 const kindle = kindlegen() 
  if (!fs.existsSync(kindle)){
    console.log('kindlegen does not exists on epecified path')
    console.log('Please edit ~/.book.yaml')
    process.exit(1)
  }
}

function isBook(){
  if (!fs.existsSync(localbook) || !fs.existsSync(titlefile)){
    console.log('This is not a book folder');
    console.log(`Use 'book init' to initialize`);
    process.exit(1)
  }
}

function errormsg(file) {
  let msg = [
    `File ${file} exists`,
    "Please edit manually"
  ]
  printmessage(msg)
}

function notExists(file) {
  let msg = [
    `File ${file} does not exists`,
    "Use 'book conf'"
  ]
  printmessage(msg)
}

module.exports = {
  bookconf: bookconf,
  homedir: homedir,
  localbook: localbook,
  titlefile: titlefile,
  errormsg: errormsg, // Function
  isBook: isBook, // Function
  output: output, // Function
  kindlegen: kindlegen, // Function
  hasCover: hasCover, // Function
  hasTitle: hasTitle, // Function
  kindleExists: kindleExists, // Function
  pdfEngine: pdfEngine, // Function
  notExists:notExists // Function
}
