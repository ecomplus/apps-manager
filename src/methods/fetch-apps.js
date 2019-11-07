import request from '../lib/market-requests'

/**
 * @method
 * @memberof EcomApps
 * @name fetchApps
 * @description Fetch list of apps from
 * [E-Com Plus Market API](https://github.com/ecomclub/market/blob/master/README.md#api-public-resources).
 *
 * @param {object} [meta] - Search options
 * @param {object} [meta.params] - Search filters, can be `{ title, slug, category }`
 * @param {number} [meta.limit=30] - Set the maximum number of results to return
 * @param {number} [meta.offset=0] - Specifies the first entry to return
 * @param {array} [meta.fields] - Specifies the object properties to return
 *
 * @returns {Promise<apps|error>}
 *
 * @example

// Retrieve simple list of apps
ecomApps.fetchApps()
  .then(result => console.log(result))
  .catch(e => console.log(e))

 * @example

// Search for specific app
const options = {
  params: {
    title: 'Meu App',
    slug: 'meu-app'
  }
}
ecomApps.fetchApps(options)
  .then(result => console.log(result))
  .catch(e => console.log(e))

 * @example

// With limit and offset
const options = {
  limit: 10,
  offset: 2
}
ecomApps.fetchApps(options)
  .then(result => console.log(result))
  .catch(e => console.log(e))

 * @example

// Retrieve list of apps by ids
const options = {
  params: {
    app_id: '1236,1240,1245'
  }
}
ecomApps.fetchApps(options)
  .then(result => console.log(result))
  .catch(e => console.log(e))

 */

export default (meta = {}) => {
  const { params, limit, offset, fields } = meta

  let url = '/applications?'
  if (params) {
    for (const key in params) {
      if (params[key] === undefined || params[key] === null) {
        delete params[key]
      }
    }
    url += Object.keys(params).map(key => key + '=' + params[key]).join('&')
  }
  if (limit) {
    url += `&limit=${limit}`
  }
  if (offset) {
    url += `&offset=${offset}`
  }
  if (fields && Array.isArray(fields) && fields.length) {
    url += `&fields=${fields.join()}`
  }
  return request({ url }).then(resp => resp.data)
}
