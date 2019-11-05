export default (self, appId, redirect = false) => {
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
      .requestApi('/applications.json', 'post', body)
      .then(resp => {
        // redirect to oauth
        if (redirect && app.redirect_uri && app.redirect_uri !== null) {
          const auth = ecomAuth.getSession()
          const url = `${app.redirect_uri}?x_store_id=${auth.store_id}`
          createPopup(url, `Authentication ${app.title}`)
        }

        return {
          app,
          result: resp.data
        }
      })
  })
}

const createPopup = (url, title) => {
  if (typeof window !== 'object') {
    throw new Error('Method available for browser only')
  }

  const { screen } = window
  let width
  if (screen) {
    // set window width based on screen width
    if (screen.width >= 640) {
      width = 900
    } else {
      width = screen.width
    }
  } else {
    width = 380
  }

  // open new browser window
  const popup = window.open(url, title, `height=500,width=${width}`)
  if (popup) {
    if (typeof window === 'object' && window.focus) {
      popup.focus()
    }
  }
  return popup
}
