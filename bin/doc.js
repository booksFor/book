const aux = require('./aux.js')
const doIt = require('child_process').execSync

function doc() {
  const output = aux.output()
  doIt(`pandoc -s -f markdown-implicit_figures --toc title.txt *.md -o ${output}.docx`)
  console.log('docx file generated')
}

module.exports = {
  exec: doc
}
