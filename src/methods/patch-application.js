export default (self, _id, { data, hiddenData }) => {
  const method = 'patch'
  const promises = []
  const { ecomAuth } = self
  if (data) {
    promises.push(ecomAuth.apiRequest(`/applications/${_id}/data.json`, method, data))
  }

  if (hiddenData) {
    promises.push(ecomAuth.apiRequest(`/applications/${_id}/hidden_data.json`, method, hiddenData))
  }

  return Promise.all(promises)
}
