const test = require('tape')
const selectURL = require('../src/select-package-url')

// mock response from https://registry.npmjs.org/
const mockPackageJSON = {
  pkg: {
    'dist-tags': {
      latest: '1.1.0'
    },
    versions: {
      '1.1.0': {
        dist: {
          tarball: 'http://url/to/tarball'
        }
      }
    }
  }
}

test("Select the url to the package's latest version", assert => {
  const msg = 'Returns the correct url'
  const url = selectURL(mockPackageJSON)
  assert.equal(url, 'http://url/to/tarball', msg)
  assert.end()
})
