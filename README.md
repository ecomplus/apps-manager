# apps-manager

[![Publish](https://github.com/ecomplus/apps-manager/workflows/Publish/badge.svg)](https://github.com/ecomplus/apps-manager/actions?workflow=Publish) [![CodeFactor](https://www.codefactor.io/repository/github/ecomplus/apps-manager/badge)](https://www.codefactor.io/repository/github/ecomplus/apps-manager) [![npm version](https://img.shields.io/npm/v/@ecomplus/apps-manager.svg)](https://www.npmjs.org/@ecomplus/apps-manager) [![License AGPL](https://img.shields.io/badge/License-AGPL-orange.svg)](https://opensource.org/licenses/AGPL-3.0)

JS lib to manage E-Com Plus store applications

[Changelog](https://github.com/ecomplus/apps-manager/blob/master/CHANGELOG.md)

## Usage

The `@ecomplus/apps-manager` package can be used to work with [E-Com Plus Market](https://market.e-com.plus/) and [Store API](https://developers.e-com.plus/docs/api/#/store/applications/) applications, with methods for apps search, install, edit and delete.

It's available for both Node.js and browser environments.

- [Get started](https://developers.e-com.plus/apps-manager/module-@ecomplus_apps-manager.html)
- [Class reference](https://developers.e-com.plus/apps-manager/EcomApps.html)

### Example

```js
import ecomAuth from '@ecomplus/auth'
import ecomApps from '@ecomplus/apps-manager'

ecomApps.listFromMarket()
  .then(availableApps => {
    console.log(availableApps)
  })
  .catch(console.error)

const listStoreApps = () => {
  ecomApps.list()
    .then(installedApps => {
      console.log(installedApps)
    })
    .catch(console.error)
}

if (ecomAuth.checkLogin()) {
  listStoreApps()
} else {
  ecomAuth.on('login', listStoreApps)
}
```
