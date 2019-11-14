/**
 * https://github.com/ecomclub/ecomplus-auth
 * @author E-Com Club <ti@e-com.club>
 * @license AGPL-3.0
 */

import EcomAuth from '@ecomplus/auth'
import fetchMarketApps from './methods/fetch-market-apps'
import findApp from './methods/find-app'
import installApp from './methods/install-app'
import removeApplication from './methods/remove-application'
import editApplication from './methods/edit-application'
import fetchStoreApplications from './methods/fetch-store-applications'
import findApplication from './methods/find-application'

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

  this.fetchMarketApps = meta => fetchMarketApps(meta)
  this.findApp = appId => findApp(appId)
  this.installApp = (appId, redirect, body) => installApp(self, appId, redirect, body)
  this.removeApplication = _id => removeApplication(self, _id)
  this.editApplication = (_id, body) => editApplication(self, _id, body)
  this.fetchStoreApplications = (appId, fields) => fetchStoreApplications(self, appId, fields)
  this.findApplication = _id => findApplication(self, _id)
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
