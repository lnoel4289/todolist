import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000,
})

api.interceptors.request.use((config) => {
  // Ajout du token d'authentification par exemple
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Gestion globale des erreurs
    if (error.response?.status === 401) {
      // Redirection vers la page de login
    }
    return Promise.reject(error)
  }
)

export default api 