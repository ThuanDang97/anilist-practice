import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

// types
import { User, UserAction } from '@type/user'

// services
import { fetchApi } from '@services/userService'

const useAuth = create(
  persist<UserAction>(
    (set) => ({
      userAuthentication: null,
      login: async (accessToken: string) => {
        localStorage.setItem('access_token', JSON.stringify(accessToken))

        const response = await fetchApi(accessToken)

        set({ userAuthentication: response })
        return response as User
      },
      logout: () => {
        localStorage.removeItem('access_token')
        set({ userAuthentication: null })
      },
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)

export default useAuth
