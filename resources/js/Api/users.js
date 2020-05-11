import axios from 'axios'
import axiosRetry from 'axios-retry'

const api = axios.create({
  baseURL: '/api'
})

axiosRetry(api, {
  retries: 3
})

export default {
  all (params) {
    return api.get('users', params)
  },
  find (id) {
    return api.get(`users/${id}`)
  },
  create (data) {
    return api.post('users', data)
  },
  update (id, data) {
    return api.put(`users/${id}`, data)
  },
  delete (id) {
    return api.delete(`users/${id}`)
  }
}
