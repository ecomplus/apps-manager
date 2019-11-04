/**
 * https://github.com/ecomclub/ecomplus-auth
 * @author E-Com Club <ti@e-com.club>
 * @license AGPL-3.0
 */
import EcomAuth from '@ecomplus/auth'
import fetchApplications from './methods/fetch-applications'
import findApplications from './methods/find-applications'
import installApplication from './methods/install-application'
import removeApplication from './methods/remove-application'
import patchApplication from './methods/patch-application'

const EcomApps = function (sessionKey) {
  const self = this
  this.ecomAuth = new EcomAuth(sessionKey)
  this.fetch = (meta = {}) => fetchApplications(meta)
  this.find = appId => findApplications(appId)
  this.install = appId => installApplication(self, appId)
  this.remove = _id => removeApplication(self, _id)
  this.editApp = (_id, body) => patchApplication(self, _id, body)
}

export default EcomApps
