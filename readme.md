# download-package
> Download the latest version of an npm package to a specified directory

## Installation

``` sh
    npm install --save download-package
```

## Example use

Here's how you would install the latest version of `browserify` into a `packages` folder:

``` js
    const downloadPkg = require('download-package')
    
    downloadPkg('browserify', `${__dirname}/packages`)
        .then(() => console.log('do other stuff'))
        .catch(() => console.log('there was an error downloading the package'))
```

Notes for the above example:
 - The destination folder (`./packages`) must exist before running `downloadPkg`
 - The `browserify` package files will be stored in `./packages/browserify`
 - The downloaded `browserify` package can be 'required' like any
   other package: `require('./packages/browserify')`
