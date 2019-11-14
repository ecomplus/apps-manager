/**
 * @method
 * @memberof EcomApps
 * @name fetchStoreApplications
 * @description Fetch merchant's applications list
 * [Store API]{@link https://developers.e-com.plus/docs/api/#/store/applications}.
 * @param {number} [appId] - Specifies application id to search
 * @param {array} [fields] - Specifies t[he object properties to return
 *
 * @returns {Promise<data|error>}
 *
 * @example

ecomApps.fetchStoreApplications()
  .then(result => console.log(result))
  .catch(e => console.log(e))

 */

export default (self, appId, fields) => {
  let url = '/applications.json?'
  if (appId) {
    url += `app_id=${appId}`
  }
  if (fields && Array.isArray(fields) && fields.length) {
    url += `&fields=${fields.join()}`
  }
  return self.ecomAuth.requestApi(url).then(({ data }) => data.result)
}
