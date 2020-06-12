const aux = require('./aux.js')
const doIt = require('child_process').execSync

function pdf() {
  const output = aux.output()
  const pdfEngine = aux.pdfEngine()
  doIt(`pandoc -s -f markdown-implicit_figures --pdf-engine=${pdfEngine} --toc title.txt *.md -o ${output}.pdf`)
  console.log('pdf file generated')
}

module.exports = {
  exec: pdf
}
