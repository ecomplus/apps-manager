/**
 * @method
 * @memberof EcomApps
 * @name install
 * @description Install Market Apps into
 * [E-Com Plus Store REST API]{@link https://developers.e-com.plus/docs/api/#/store/applications/applications}.
 *
 * @param {number} appId - Market application ID
 * @param {boolean} [canRedirect=false] - Set to true when you
 * want to automatically redirect user on new window
 * when app returns a `redirect_uri` (usually for OAuth flux)
 * @param {object} [appBody] - Market application body
 * @returns {Promise<{ app, result }|error>}
 *
 * @example

ecomApps.install(1236, true)
  .then(result => console.log(result))
  .catch(e => console.log(e))

 */

export default (self, appId, canRedirect, appBody) => {
  const { findOnMarket, ecomAuth } = self

  const install = (app) => {
    const storeApp = app.store_app || {}
    storeApp.state = 'active'
    storeApp.authentication = Boolean(storeApp.authentication)
    storeApp.version_date = new Date().toISOString()

    return ecomAuth
      .requestApi('/applications.json', 'post', storeApp)
      .then(resp => {
        // redirect to oauth
        if (canRedirect && app.redirect_uri) {
          const auth = ecomAuth.getSession()
          const url = `${app.redirect_uri}?x_store_id=${auth.store_id}`
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
