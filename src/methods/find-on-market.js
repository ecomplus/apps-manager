import request from '../lib/market-requests'

/**
 * @method
 * @memberof EcomApps
 * @name findOnMarket
 * @description Fetch specific app from
 * [E-Com Plus Market API](https://github.com/ecomclub/market/blob/master/README.md#api-public-resources).
 *
 * @param {number} appId - Market application ID (`app_id`)
 *
 * @returns {Promise<data|error>}
 *
 * @example

ecomApps.findOnMarket(1236)
  .then(result => console.log(result))
  .catch(e => console.log(e))

 */

export default (self, appId) => {
  if (!appId || isNaN(appId)) {
    return Promise.reject(new Error('app_id is invalid'))
  }
  return request({ url: `/applications/${appId}` }).then(resp => resp.data)
}
