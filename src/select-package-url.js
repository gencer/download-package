'use strict'

const selectURL = packageJSON => {
  const latestVersion = packageJSON['pkg']['dist-tags']['latest']
  return packageJSON['pkg']['versions'][latestVersion]['dist']['tarball']
}

module.exports = selectURL
