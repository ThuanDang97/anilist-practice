import { renderHook, waitFor } from '@testing-library/react'

// hooks
import useAnimeDetail from '@hooks/useAnime/useAnimeDetail'

// mocks
import { mockAnime } from '@mocks/mockAnime'

//utils
import { wrapper } from '@utils/testUtils'

import * as services from '@services/animeService'

jest.mock('@services/animeService', () => ({
  __esModule: true,
  ...jest.requireActual('@services/animeService'),
}))

describe('useAnimeDetail', () => {
  test('useAnimeDetail', async () => {
    jest.spyOn(services, 'getDetailAnime').mockResolvedValue(mockAnime[0])
    const { result } = renderHook(() => useAnimeDetail('1234'), {
      wrapper,
    })

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true)
    })

    await waitFor(() => {
      expect(result.current.data).toEqual(mockAnime[0])
    })
  })
})
