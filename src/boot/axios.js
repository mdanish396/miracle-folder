import { boot } from 'quasar/wrappers'
import axios from 'axios'
import { Notify } from 'quasar'

const api = axios.create({ baseURL: 'https://your-api-url.com' })

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error)

    let message = 'Something went wrong'
    if (error.response) {
      message = error.response.data?.message || `Error ${error.response.status}`
    }

    Notify.create({ type: 'negative', message })

    return Promise.reject(error)
  }
)

export default boot(({ app }) => {
  app.config.globalProperties.$axios = api
})

export { api }
