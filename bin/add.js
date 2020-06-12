const yaml = require('js-yaml')
const prompt = require('readline-sync')
const aux = require('./aux.js')
const sprintf = require('sprintf')
const fs = require('fs')

const digits = '%05d'

function add() {
  aux.isBook()

  const titlechapter = prompt.question("Title for yor chapter's book: ")

  if (titlechapter === '') {
    console.log('Title empty')
    console.log('Nothing to do')
    process.exit(1)
  }

  let doc = yaml.safeLoad(fs.readFileSync(aux.localbook, 'utf8'))
  let chapter = doc.chapter * 1 + 5
  doc.chapter = chapter
  const yy = yaml.safeDump(doc)
  fs.writeFileSync(aux.localbook, yy)

  const mdFile = sprintf(digits, chapter) + '-' + titlechapter.split(' ').join('-') + '.md'

  fs.writeFileSync(mdFile, `# ${titlechapter}\n\nWrite your great content here\n\n`)

}

module.exports = {
  exec: add
}
