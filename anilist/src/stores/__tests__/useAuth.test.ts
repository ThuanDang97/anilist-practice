import useAuth from '@stores/useAuth'
import { act, renderHook } from '@testing-library/react'

import * as services from '@services/userService'

jest.mock('@services/userService', () => ({
  __esModule: true,
  ...jest.requireActual('@services/userService'),
}))

describe('useAuth store', () => {
  it('should set userAuthentication when login is called', async () => {
    const { result } = renderHook(() => useAuth())

    // Mock fetchApi function
    jest.spyOn(services, 'fetchApi').mockResolvedValueOnce({
      id: 1,
      name: 'thuandang',
      avatar: {
        medium: '',
      },
    })

    await act(async () => {
      await result.current.login('mockedAccessToken')
    })

    expect(result.current.userAuthentication).not.toBeNull()
  })

  it('should clear userAuthentication when logout is called', async () => {
    const { result } = renderHook(() => useAuth())

    // Mock login
    await act(async () => {
      await result.current.login('mockedAccessToken')
    })

    // Logout
    act(() => {
      result.current.logout()
    })

    expect(result.current.userAuthentication).toBeNull()
  })

  it('should clear userAuthentication on page reload if localStorage is cleared', () => {
    const { result } = renderHook(() => useAuth())

    // Mock login
    act(() => {
      result.current.login('mockedAccessToken')
    })

    // Clear localStorage
    act(() => {
      localStorage.clear()
    })

    // Create a new instance of the hook to simulate a page reload
    const view = renderHook(() => useAuth())

    expect(view.result.current.userAuthentication).toBeNull()
  })
})
