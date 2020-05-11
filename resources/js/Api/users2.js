import axios from 'axios'
import Uapi from '../services/api'

const client = axios.create({
  baseURL: '/api'
})

export default {
  all (params) {
    return client.get('users', params)
  },
  find (id) {
    return client.get(`users/${id}`)
  },
  create (data) {
    return client.post('users', data)
  },
  update (id, data) {
    return client.put(`users/${id}`, data)
  },
  delete (id) {
    return client.delete(`users/${id}`)
  }, errors => {
    console.log(errors);
},
  remove (id) {
    API.resource(this).delete({ id: id }).then(response => {
      this.fetchUsers()
    }), errors => {
        console.log(errors);
  }
}
