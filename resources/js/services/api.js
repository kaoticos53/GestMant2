const API_URL = 'http://localhost:8000/users'

export default {
  resource (context) {
    return context.$resource(API_URL + '{/id}')
  }
}
