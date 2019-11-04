export default (self, appId) => {
  const { findApp, ecomAuth } = self
  const appProps = ['app_id', 'title', 'slug', 'paid', 'version', 'version_date', 'type', 'load_events', 'script_uri', 'github_repository', 'authentication', 'auth_callback_uri', 'auth_scope']
  const body = {}

  return findApp(appId).then(app => {
    appProps.forEach(prop => {
      if (app[prop] && app[prop] !== null) {
        body[prop] = app[prop]
      }
    })

    body.state = 'active'
    body.status = 'active'
    body.admin_settings = app.json_body || {}
    body.modules = app.module || {}
    body.version_date = new Date(app.version_date).toISOString()

    return ecomAuth
      .apiRequest('/applications.json', 'post', body)
      .then(resp => {
        // redirect to oauth
        if (app.redirect_uri && app.redirect_uri !== null) {
          const auth = ecomAuth.getSession()
          const url = `${app.redirect_uri}?x_store_id=${auth.store_id}`
          self.popupOauthLink(url)
        }

        return resp.data
      })
  })
}
