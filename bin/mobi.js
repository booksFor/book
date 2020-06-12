const aux = require('./aux.js')
const doIt = require('child_process').execSync

function mobi() {
  aux.kindleExists()

  const output = aux.output()
  doIt(`pandoc -s -f markdown-implicit_figures --toc title.txt *.md -o ${output}.epub`)
  const kindlegen = aux.kindlegen()
  doIt(`${kindlegen} ${output}.epub`)
  console.log('mobi file generated')
}

module.exports = {
  exec: mobi
}
