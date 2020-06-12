const aux = require('./aux.js')
const doIt = require('child_process').execSync

function html() {
  const output = aux.output()
  doIt(`pandoc -s -f markdown-implicit_figures --toc title.txt *.md -o ${output}.html`)
  console.log('html file generated')
}

module.exports = {
  exec: html
}
