/**
 * @method
 * @memberof EcomApps
 * @name removeApplication
 * @description Delete application from
 * [Store API]{@link https://developers.e-com.plus/docs/api/#/store/applications/specific-application}.
 *
 * @param {number} applicationId - Object ID (`_id`) of application in Store API
 *
 * @returns {Promise<response|error>}
 *
 * @example

ecomApps.removeApplication('5dc2023456cc4e057cfe8e94')
  .then(result => console.log(result))
  .catch(e => console.log(e))

 */

export default (self, _id) => self.ecomAuth.requestApi(`/applications/${_id}.json`, 'delete')
