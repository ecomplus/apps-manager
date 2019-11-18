/**
 * @method
 * @memberof EcomApps
 * @name findStoreApplication
 * @description find application from
 * [Store API]{@link https://developers.e-com.plus/docs/api/#/store/applications/specific-application}.
 *
 * @param {number} applicationId - Object ID (`_id`) of application in Store API
 *
 * @returns {Promise<data|error>}
 *
 * @example

ecomApps.findStoreApplication('5dc2023456cc4e057cfe8e94')
  .then(result => console.log(result))
  .catch(e => console.log(e))

 */

export default (self, _id) => self.ecomAuth.requestApi(`/applications/${_id}.json`)
