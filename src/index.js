/**
 * https://github.com/ecomclub/ecomplus-auth
 * @author E-Com Club <ti@e-com.club>
 * @license AGPL-3.0
 *
 * @description
 * JS client for manage E-Com Plus Apps
 * @module @ecomplus/apps-manager
 * @namespace EcomApps
 * @see EcomApps
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
 * <script src="https://cdn.jsdelivr.net/npm/@ecomplus/apps-manager@0.1.1/dist/ecom-apps.min.js"></script>
 */
import EcomAuth from '@ecomplus/auth'
import fetchApps from './methods/fetch-apps'
import findApp from './methods/find-app'
import installApp from './methods/install-app'
import removeApplication from './methods/remove-application'
import editApplication from './methods/edit-application'

const EcomApps = function (ecomAuth) {
  const self = this
  this.ecomAuth = ecomAuth || new EcomAuth()
  this.fetchApps = (meta = {}) => fetchApps(meta)
  this.findApp = appId => findApp(appId)
  this.installApp = (appId, redirect) => installApp(self, appId, redirect)
  this.removeApplication = _id => removeApplication(self, _id)
  this.editApplication = (_id, body) => editApplication(self, _id, body)
}

export default EcomApps
