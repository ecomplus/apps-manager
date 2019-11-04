import request from '../lib/market-requests'
import querystring from 'querystring'

export default (query) => {
  const { params, limit, offset, fields } = query
  let url = '/applications?'

  if (limit) {
    url += `&limit=${limit}`
  }

  if (offset) {
    url += `&offset=${offset}`
  }

  if (params) {
    url += `&${querystring.stringify(params)}`
  }

  if (fields && Array.isArray(fields) && fields.length) {
    url += `&fields=${fields.join()}`
  }

  return request({ url }).then(resp => resp.data)
}
