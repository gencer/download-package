'use strict'

const path = require('path')
const fs = require('mz/fs')
const download = require('download')
const getPackageJSON = require('get-package-json')
const selectPackageURL = require('./select-package-url')

const downloadPackage = (pkg, destination) => {
  return getPackageJSON(pkg)
    .then(selectPackageURL)
    .then(packageURL => {
      return download(packageURL, destination, { extract: true })
    })
    .then(() => {
      const oldPath = path.join(destination, 'package')
      const newPath = path.join(destination, pkg)
      return fs.rename(oldPath, newPath)
    })
}

module.exports = downloadPackage
