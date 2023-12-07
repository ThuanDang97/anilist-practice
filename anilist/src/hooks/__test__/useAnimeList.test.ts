import { renderHook, waitFor } from '@testing-library/react'

// hooks
import useAnimeList from '@hooks/useAnime/useAnimeList'

// mocks
import { mockListAnime } from '@mocks/mockAnime'

//utils
import { wrapper } from '@utils/testUtils'

import * as services from '@services/animeService'

jest.mock('@services/animeService', () => ({
  __esModule: true,
  ...jest.requireActual('@services/animeService'),
}))

describe('useAnimeList', () => {
  test('useAnimeList', async () => {
    jest.spyOn(services, 'getAnime').mockResolvedValue(mockListAnime)
    const { result } = renderHook(() => useAnimeList({ id: 1 }), {
      wrapper,
    })

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true)
    })

    await waitFor(() => {
      expect(result.current.data).toEqual(mockListAnime)
    })
  })
})
