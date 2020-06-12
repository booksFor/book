const printmessage = require('print-message')

function help() {
  printmessage([
    "Welcome to book cli",
    "This script helps in converting markdown files",
    "in different formats like html, pdf, epub, mobi",
    "",
    "Commands:",
    "",
    "conf:      General configuration",
    "init:      Initialize a directory as book directory",
    "",
    "Commands to convert (only work on book directories)",
    "",
    "add:       Add a chapter (markdown file) on your book (directory)",
    "",
    "html:      convert to html file",
    "doc:       convert to docx file",
    "pdf:       convert to pdf file",
    "epub:      convert to epub file",
    "mobi:      converto to mobi file",
    "all:       converto markdown files to all previous extensions",
  ])
}


module.exports = {
  exec: help
}
