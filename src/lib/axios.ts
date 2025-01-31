import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000,
})

api.interceptors.request.use((config: AxiosRequestConfig) => {
  // Ajout du token d'authentification par exemple
  const token = localStorage.getItem('token')
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    // Gestion globale des erreurs
    if (error.response?.status === 401) {
      // Redirection vers la page de login
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export default api 