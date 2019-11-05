import axios from 'axios'
const API_MARKET = 'https://market.e-com.plus/v1'

const instance = axios.create({ baseURL: API_MARKET, timeout: 60000 })
export default options => instance(options)
