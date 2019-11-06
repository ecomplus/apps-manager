import request from '../lib/market-requests'
/**
 * @method
 * @memberof EcomApps
 * @name fetchApps
 * @description fetch list of apps from Market API
 *
 * @param {object} meta - Search options
 * @param {object} [meta.params] - search parameters, can be title or slug
 * @param {number} [meta.limit] - Set the maximum number of results to return - Default 30
 * @param {number} [meta.offset] - Specifies the first entry to return - Default 0 
 * @param {array} [meta.fields] - Specifies the object properties to return 
 *
 * @returns {Promise<response|error>}
 * @example
// retrieve simple list of apps
ecomApps.fetchApps()
  .then(result => console.log(result))
  .catch(e => console.log(e))

// search for specific app
const options = {
  params: {
    title: 'Meu App',
    slug: 'meu-app'
  }
}

ecomApps.fetchApps(options)
  .then(result => console.log(result))
  .catch(e => console.log(e))

// with limit and offset
const options = {
  limit: 10,
  offset: 2
}

ecomApps.fetchApps(options)
  .then(result => console.log(result))
  .catch(e => console.log(e))
*/
export default (query) => {
  const { params, limit, offset, fields } = query
  let url = '/applications?'

  if (limit) {
    url += `&limit=${limit}`
  }

  if (offset) {
    url += `&offset=${offset}`
  }

  if (params) {
    url += Object.keys(params).map(key => key + '=' + params[key]).join('&')
  }

  if (fields && Array.isArray(fields) && fields.length) {
    url += `&fields=${fields.join()}`
  }

  return request({ url }).then(resp => resp.data)
}
