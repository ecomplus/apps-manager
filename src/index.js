/**
 * https://github.com/ecomclub/ecomplus-auth
 * @author E-Com Club <ti@e-com.club>
 * @license AGPL-3.0
 */

import EcomAuth from '@ecomplus/auth'
import listFromMarket from './methods/list-from-market'
import findOnMarket from './methods/find-on-market'
import install from './methods/install'
import remove from './methods/remove'
import edit from './methods/edit'
import list from './methods/list'
import find from './methods/find'

/**
 * JS client for manage E-Com Plus Apps
 * @module @ecomplus/apps-manager
 * @see EcomApps
 *
 * @example
 * // ES import
 * import EcomApps from '@ecomplus/apps-manager'
 *
 * @example
 * // With CommonJS
 * const EcomApps = require('@ecomplus/apps-manager')
 *
 * @example
 * <!-- Global `@ecomplus/apps-manager` from CDN on browser -->
 * <script src="https://cdn.jsdelivr.net/npm/@ecomplus/apps-manager@0.1/dist/ecom-apps.root.min.js"></script>
 */

const EcomApps = function (ecomAuth = new EcomAuth()) {
  const self = this

  /**
   * [EcomAuth](https://github.com/ecomclub/ecomplus-auth) instance.
   * @name EcomApps#ecomAuth
   * @type {object}
   */
  this.ecomAuth = ecomAuth

  this.listFromMarket = meta => listFromMarket(self, meta)
  this.findOnMarket = appId => findOnMarket(self, appId)
  this.install = (appId, redirect, body) => install(self, appId, redirect, body)
  this.remove = _id => remove(self, _id)
  this.edit = (_id, body, canUpdateInternals) => edit(self, _id, body, canUpdateInternals)
  this.list = meta => list(self, meta)
  this.find = _id => find(self, _id)
}

export default EcomApps

/**
 * Construct a new apps manager instance object.
 * @class EcomApps
 * @param {object} [ecomAuth=new EcomAuth()] - [EcomAuth](https://github.com/ecomclub/ecomplus-auth) instance
 *
 * @example
 * const ecomApps = new EcomApps()
 */
