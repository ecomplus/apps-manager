/**
 * @method
 * @memberof EcomApps
 * @name install
 * @description Install Market Apps into
 * [E-Com Plus Store REST API]{@link https://developers.e-com.plus/docs/api/#/store/applications/applications}.
 *
 * @param {number} appId - Market application ID
 * @param {boolean} [redirect=false] - Set to true when you
 * want to automatically redirect user on new window
 * when app returns a `redirect_uri` (usually for oauth flux)
 * @param {object} [appBody] - Market application body
 * @returns {Promise<{ app, result }|error>}
 *
 * @example

ecomApps.install(1236, true)
  .then(result => console.log(result))
  .catch(e => console.log(e))

 */

export default (self, appId, redirect = false, appBody) => {
  const { findOnMarket, ecomAuth } = self
  const storeAppProps = [
    'app_id',
    'title',
    'slug',
    'paid',
    'version',
    'version_date',
    'type',
    'load_events',
    'script_uri',
    'github_repository',
    'authentication',
    'auth_callback_uri',
    'auth_scope'
  ]

  const install = (app) => {
    const storeApp = app.store_app || {}
    const body = {}
    storeAppProps.forEach(prop => {
      if (storeApp[prop]) {
        body[prop] = storeApp[prop]
      }
    })

    body.state = 'active'
    body.status = 'active'
    body.admin_settings = storeApp.admin_settings || {}
    body.modules = storeApp.modules || {}
    body.version_date = new Date(storeApp.version_date).toISOString()

    return ecomAuth
      .requestApi('/applications.json', 'post', body)
      .then(resp => {
        // redirect to oauth
        if (redirect && storeApp.redirect_uri) {
          const auth = ecomAuth.getSession()
          const url = `${storeApp.redirect_uri}?x_store_id=${auth.store_id}`
          createPopup(url, `Authentication ${app.title}`)
        }

        return {
          app,
          result: resp.data
        }
      })
  }

  if (appBody && appBody.store_app && appBody.store_app.app_id) {
    return install(appBody)
  } else {
    return findOnMarket(appId).then(app => install(app))
  }
}

const createPopup = (url, title) => {
  if (typeof window !== 'object') {
    throw new Error('Method available for browser only')
  }

  // open new browser window
  const popup = window.open(url, title)
  if (popup) {
    if (typeof window === 'object' && window.focus) {
      popup.focus()
    }
  }
  return popup
}
