/**
 * https://github.com/ecomplus/apps-manager
 * @author E-Com Club <ti@e-com.club>
 * @license AGPL-3.0
 */

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

const EcomApps = function(ecomAuth) {
  const ecomApps = this

  ecomApps.ecomAuth = ecomAuth

  ecomApps.Constructor = EcomApps

  this.listFromMarket = meta => listFromMarket(ecomApps, meta)

  this.findOnMarket = appId => findOnMarket(ecomApps, appId)

  this.install = (appId, redirect, body) => install(ecomApps, appId, redirect, body)

  this.remove = _id => remove(ecomApps, _id)

  this.edit = (_id, body, canUpdateInternals) => edit(ecomApps, _id, body, canUpdateInternals)

  this.list = meta => list(ecomApps, meta)

  this.find = _id => find(ecomApps, _id)

  this.listFromMarket = (meta) => listFromMarket(ecomApps, meta)
}

export default EcomApps
