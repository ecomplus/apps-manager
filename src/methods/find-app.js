import request from '../lib/market-requests'
/**
 * @method
 * @memberof EcomApps
 * @name findApp
 * @description Fetch specific app from market api
 *
 * @param {number} appId - Market application ID
 *
 * @returns {Promise<response|error>}
 * @example

ecomApps.findApp(1236)
  .then(result => console.log(result))
  .catch(e => console.log(e))
*/
export default appId => {
  if (!appId || isNaN(appId)) {
    return Promise.reject(new Error('app_id is invalid'))
  }
  return request({ url: `/applications/${appId}` }).then(resp => resp.data)
}
