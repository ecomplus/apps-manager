export default (self, appId) => {
  const { find, ecomAuth } = self
  const appProps = ['app_id', 'title', 'slug', 'paid', 'version', 'version_date', 'type', 'load_events', 'script_uri', 'github_repository', 'authentication', 'auth_callback_uri', 'auth_scope']
  const body = {}

  return find(appId).then(app => {
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

    return ecomAuth.apiRequest('/applications.json', 'post', body).then(resp => resp.data)
  })
}
