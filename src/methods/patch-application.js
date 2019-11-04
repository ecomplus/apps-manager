export default (self, _id, body) => {
  const method = 'patch'
  const promises = []
  const { ecomAuth } = self
  const { data, hidden_data } = body

  if (data && typeof data === 'object') {
    promises.push(ecomAuth.apiRequest(`/applications/${_id}/data.json`, method, data))
  }

  if (hidden_data && typeof hidden_data === 'object') {
    promises.push(ecomAuth.apiRequest(`/applications/${_id}/hidden_data.json`, method, hidden_data))
  }

  if (!data && !hidden_data && body) {
    promises.push(ecomAuth.apiRequest(`/applications/${_id}.json`, method, body))
  }

  return Promise.all(promises)
}
