import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://market.e-com.plus/v2',
  timeout: 60000
})

export default options => instance(options)
