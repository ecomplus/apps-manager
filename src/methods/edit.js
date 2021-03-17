/**
 * @method
 * @memberof EcomApps
 * @name edit
 * @description Edit application body in Store API
 * [Store API]{@link https://developers.e-com.plus/docs/api/#/store/applications/specific-application}.
 *
 * @param {number} applicationId - Object ID (`_id`) of application in Store API
 * @param {object} body - Application body must follow the
 * [schema]{@link https://developers.e-com.plus/docs/api/#/store/applications/applications}
 * @param {boolean} canUpdateInternals - Force update internals attributes

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
ecomApps.edit('5dc2023456cc4e057cfe8e94', body)
  .then(result => console.log(result))
  .catch(e => console.log(e))

 */

import { removeInternals } from '../utils/remove-internals-attributes'

export default (self, _id, body, canUpdateInternals = false) => {
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

  const updateAppData = (subresource = 'data', body = data) => {
    if (body && typeof body === 'object' && Object.keys(body).length) {
      if (!canUpdateInternals) {
        body = removeInternals(body)
      }
      promises.push(ecomAuth.requestApi(`/applications/${_id}/${subresource}.json`, method, body))
    }
  }
  updateAppData()
  updateAppData('hidden_data', hiddenData)

  if (Object.keys(editAppBody).length) {
    promises.push(ecomAuth.requestApi(`/applications/${_id}.json`, method, editAppBody))
  }

  return Promise.all(promises)
}
