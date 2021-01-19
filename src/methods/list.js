/**
 * @method
 * @memberof EcomApps
 * @name list
 * @description Fetch merchant's applications list
 * [Store API]{@link https://developers.e-com.plus/docs/api/#/store/applications}.
 *
 * @param {object} [meta] - Search options
 * @param {object} [meta.params] - Search filters, can be `{ _id, app_id, title, slug, category, state, version, type }`
 * @param {number} [meta.limit=30] - Set the maximum number of results to return
 * @param {number} [meta.offset=0] - Specifies the first entry to return
 * @param {array} [meta.fields] - Specifies the object properties to return
 * @param {string} [meta.sort] - Specifies rules to order the resultant objects
 * @returns {Promise<data|error>}
 *
 * @example

ecomApps.list()
  .then(result => console.log(result))
  .catch(e => console.log(e))

 */

export default (self, meta = {}) => {
  const { params, fields, limit, offset, sort } = meta
  let url = '/applications.json?'
  if (params) {
    for (const key in params) {
      switch (typeof params[key]) {
        case 'string':
        case 'number':
          url += `${key}=${params[key]}&`
      }
    }
  }
  if (limit) {
    url += `&limit=${limit}`
  }
  if (offset) {
    url += `&offset=${offset}`
  }
  if (sort) {
    url += `&sort=${sort}`
  }
  if (fields && Array.isArray(fields) && fields.length) {
    url += `&fields=${fields.join()}`
  } else if (fields && typeof fields === 'string') {
    url += `&fields=${fields}`
  }
  return self.ecomAuth.requestApi(url).then(({ data }) => data.result)
}
