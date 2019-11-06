/**
 * @method
 * @memberof EcomApps
 * @name removeApplication
 * @description Uninstall application from Store API
 * [E-Com Plus Store REST API]{@link https://developers.e-com.plus/docs/api/#/store/applications/specific-application}.
 * @param {number} applicationId - Object ID of application in Store API
 * @returns {Promise<response|error>}
 * @example

ecomApps.removeApplication('5dc2023456cc4e057cfe8e94')
  .then(result => console.log(result))
  .catch(e => console.log(e))
*/
export default (self, _id) => self.ecomAuth.requestApi(`/applications/${_id}.json`, 'delete')
