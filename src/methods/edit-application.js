/**
 * @method
 * @memberof EcomApps
 * @name editApplication
 * @description Edit application body in Store API
 * [E-Com Plus Store REST API]{@link https://developers.e-com.plus/docs/api/#/store/applications/specific-application}.
 * @param {number} applicationId - Object ID of application in Store API
 * @param {object} body - Application body must follow the [schema] {@link https://developers.e-com.plus/docs/api/#/store/applications/applications}
 * @returns {Promise<response|error>}
 * @example

const body = {
  state: 'active',
  data: {
    my_app_data_configs: true
  },
  hidden_data: {
    my_app_hidden_data_config: true
  }
}

ecomApps.editApplication('5dc2023456cc4e057cfe8e94', body)
  .then(result => console.log(result))
  .catch(e => console.log(e))
*/
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
