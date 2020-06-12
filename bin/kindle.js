const aux = require('./aux.js')
const doIt = require('child_process').execSync

function epub() {
  aux.isBook()
  const output = aux.output()
  doIt(`pandoc -s --toc title.txt *.md -o ${output}.epub`)
  console.log('epub file generated')
}

module.exports = {
  exec: epub
}
