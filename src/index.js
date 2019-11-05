/**
 * https://github.com/ecomclub/ecomplus-auth
 * @author E-Com Club <ti@e-com.club>
 * @license AGPL-3.0
 */
import EcomAuth from '@ecomplus/auth'
import fetchApps from './methods/fetch-apps'
import findApp from './methods/find-app'
import installApp from './methods/install-app'
import removeApplication from './methods/remove-application'
import editApplication from './methods/edit-application'

const EcomApps = function (sessionKey) {
  const self = this
  this.ecomAuth = new EcomAuth(sessionKey)
  this.fetchApps = (meta = {}) => fetchApps(meta)
  this.findApp = appId => findApp(appId)
  this.installApp = (appId, redirect) => installApp(self, appId, redirect)
  this.removeApplication = _id => removeApplication(self, _id)
  this.editApplication = (_id, body) => editApplication(self, _id, body)
}

export default EcomApps
