const fs = require('fs')
const path = require('path')
const test = require('tape')
const rimraf = require('rimraf')
const downloadPackage = require('../src/download-package')

// folder where the packages are downloaded to
const destination = path.join(__dirname, 'packages')
const packageName = 'move-element' // the package to download from npm

fs.mkdirSync(destination)

test.onFinish(() => {
  // Clean up
  rimraf.sync(destination)
})

test('Download the latest version of an npm package', assert => {
  assert.plan(1)
  downloadPackage(packageName, destination)
    .then(() => {
      // Downloads and extracts the package to the destination folder
      try {
        assert.true(
          fs.statSync(path.join(destination, packageName)).isDirectory(),
          `There's a folder named ${packageName} in the destination`
        )
      } catch (err) {
        assert.fail(
          `There's isn't a folder named ${packageName} in the destination`
        )
      }
    })
    .catch(() => {
      assert.fail(
        'There was an error downloading the package'
      )
    })
})
