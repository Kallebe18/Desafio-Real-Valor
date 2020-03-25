import axios from 'axios'

const api = axios.create({
  baseURL: 'https://min-api.cryptocompare.com/data/v2',
})

export default api;