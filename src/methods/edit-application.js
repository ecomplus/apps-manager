export default (self, _id, body) => {
  const method = 'patch'
  const promises = []
  const { ecomAuth } = self
  let data = null
  let hiddenData = null
  for (const key in body) {
    if (key === 'data') {
      data = body[key]
      delete body[key]
    }

    if (key === 'hidden_data') {
      hiddenData = body[key]
      delete body[key]
    }
  }

  if (data && typeof data === 'object') {
    promises.push(ecomAuth.requestApi(`/applications/${_id}/data.json`, method, data))
  }

  if (hiddenData && typeof hiddenData === 'object') {
    promises.push(ecomAuth.requestApi(`/applications/${_id}/hidden_data.json`, method, hiddenData))
  }

  if (!Object.keys(body).length) {
    promises.push(ecomAuth.requestApi(`/applications/${_id}.json`, method, body))
  }

  return Promise.all(promises)
}
