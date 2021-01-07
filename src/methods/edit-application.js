/**
 * @method
 * @memberof EcomApps
 * @name editApplication
 * @description Edit application body in Store API
 * [Store API]{@link https://developers.e-com.plus/docs/api/#/store/applications/specific-application}.
 *
 * @param {number} applicationId - Object ID (`_id`) of application in Store API
 * @param {object} body - Application body must follow the
 * [schema]{@link https://developers.e-com.plus/docs/api/#/store/applications/applications}
 *
 * @returns {Promise<null|error>}
 *
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

import { removeInternals } from '../utils/remove-internals-attributes'

export default (self, _id, body, updateInternals = false) => {
  const method = 'patch'
  const promises = []
  const { ecomAuth } = self

  let data = null
  let hiddenData = null
  const editAppBody = {}
  for (const key in body) {
    switch (key) {
      case 'data':
        data = body[key]
        break
      case 'hidden_data':
        hiddenData = body[key]
        break
      default:
        editAppBody[key] = body[key]
    }
  }

  let cleanData = data
  let cleanHiddenData = hiddenData
  if (!updateInternals) {
    cleanData = removeInternals(data)
    cleanHiddenData = removeInternals(cleanHiddenData)
  }

  if (data && typeof data === 'object') {
    promises.push(ecomAuth.requestApi(`/applications/${_id}/data.json`, method, cleanData))
  }
  if (hiddenData && typeof hiddenData === 'object') {
    promises.push(ecomAuth.requestApi(`/applications/${_id}/hidden_data.json`, method, cleanHiddenData))
  }
  if (Object.keys(editAppBody).length) {
    promises.push(ecomAuth.requestApi(`/applications/${_id}.json`, method, editAppBody))
  }

  return Promise.all(promises)
}
