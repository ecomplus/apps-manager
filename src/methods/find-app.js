import request from '../lib/market-requests'

export default appId => {
  if (!appId || isNaN(appId)) {
    return Promise.reject(new Error('app_id is invalid'))
  }
  return request({ url: `/applications/${appId}` }).then(resp => resp.data)
}
