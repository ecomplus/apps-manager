'use strict'

const devMode = process.env.NODE_ENV !== 'production'
const path = require('path')
const { dependencies } = require('./package.json')

// preset default output object
const output = {
  library: 'EcomApps',
  libraryTarget: 'umd',
  libraryExport: 'default',
  path: path.resolve(__dirname, 'dist'),
  filename: 'ecom-apps.min.js',
  globalObject: 'this'
}

// base Webpack config
const config = {
  mode: devMode ? 'development' : 'production',
  entry: path.resolve(__dirname, 'src/index.js'),
  output,
  devServer: {
    contentBase: path.resolve(__dirname, 'test'),
    compress: true,
    port: 9304,
    open: true
  },
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader'
      }
    }]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map',
  externals: devMode ? ''
    // exclude all pkg dependencies on production by default
    : new RegExp('^(' + Object.entries(dependencies).map(([pkg]) => pkg).join('|') + ')(/|$)', 'i')
}

module.exports = devMode
  // single config object for dev server
  ? config
  // production outputs with and without polyfill
  : [
    config,
    {
      ...config,
      output: {
        ...output,
        filename: output.filename.replace('.min.js', '.root.min.js')
      },
      externals: {
        'lodash.isempty': {
          commonjs: 'lodash.isempty',
          commonjs2: 'lodash.isempty',
          root: 'isEmpty'
        },
        axios: {
          commonjs: 'axios',
          commonjs2: 'axios',
          root: 'axios'
        },
        '@ecomplus/utils': {
          commonjs: '@ecomplus/utils',
          commonjs2: '@ecomplus/utils',
          root: 'ecomUtils'
        },
        '@ecomplus/client': {
          commonjs: '@ecomplus/client',
          commonjs2: '@ecomplus/client',
          root: 'ecomClient'
        },
        '@ecomplus/auth': {
          commonjs: '@ecomplus/auth',
          commonjs2: '@ecomplus/auth',
          root: 'EcomAuth'
        }
      }
    }
  ]
