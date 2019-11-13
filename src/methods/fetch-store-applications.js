/**
 * @method
 * @memberof EcomApps
 * @name fetchStoreApplications
 * @description Fetch merchant's applications list
 * [Store API]{@link https://developers.e-com.plus/docs/api/#/store/applications}.
 *
 *
 * @returns {Promise<data|error>}
 *
 * @example

ecomApps.fetchStoreApplications()
  .then(result => console.log(result))
  .catch(e => console.log(e))

 */

export default (self, appId) => {
  let url = '/applications.json'
  if (appId) {
    url += `?app_id=${appId}`
  }
  return self.ecomAuth.requestApi(url).then(({ data }) => data.result)
}
