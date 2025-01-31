import { useQuery, useMutation } from '@tanstack/react-query'
import { authApi } from '@/services/api/auth'

export const useAuth = () => {
  const { data: user, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: authApi.getCurrentUser
  })

  const loginMutation = useMutation({
    mutationFn: authApi.login,
    onSuccess: () => {
      // Gérer le succès de la connexion
    }
  })

  return {
    user,
    isLoading,
    login: loginMutation.mutate
  }
} 