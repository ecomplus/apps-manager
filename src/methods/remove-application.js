export default (self, _id) => self.ecomAuth.requestApi(`/applications/${_id}.json`, 'delete')
