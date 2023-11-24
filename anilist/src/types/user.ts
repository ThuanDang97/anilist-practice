export interface User {
  id: number
  name: string
  avatar: {
    medium: string
  }
}

export interface AuthResponse {
  accessToken: string
}

export interface UserAction {
  userAuthentication: AuthResponse | null
  login: (accessToken: string) => Promise<User>
  logout: () => void
}
