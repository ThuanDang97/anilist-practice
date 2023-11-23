import { UseQueryResult, useQuery } from '@tanstack/react-query'

// services
import { fetchApi } from '@services/userService'

const useUser = (accessToken: string): UseQueryResult => {
  return useQuery({
    queryKey: ['user', accessToken],
    queryFn: () => fetchApi(accessToken),
    enabled: !!accessToken,
  })
}

export default useUser
