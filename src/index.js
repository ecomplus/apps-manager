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
import popupOauthLink from './methods/popup-oauth'

const EcomApps = function (sessionKey) {
  const self = this
  this.ecomAuth = new EcomAuth(sessionKey)
  this.fetchApps = (meta = {}) => fetchApplications(meta)
  this.findApp = appId => findApplications(appId)
  this.installApp = appId => installApplication(self, appId)
  this.removeApp = _id => removeApplication(self, _id)
  this.editApp = (_id, body) => patchApplication(self, _id, body)
  this.popupOauthLink = url => popupOauthLink(url)
}

export default EcomApps
