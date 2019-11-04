export default (self, _id) => self.ecomAuth.apiRequest(`/applications/${_id}.json`, 'delete')
