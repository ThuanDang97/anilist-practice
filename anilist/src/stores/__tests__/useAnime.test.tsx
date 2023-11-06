import { act, renderHook } from '@testing-library/react'

// mocks
import { mockListAnime } from '@mocks/mockAnime'

// hooks
import useAnime from '../useAnime'

describe('useAnime', () => {
  test('should initialize anime with an empty array', () => {
    const { result } = renderHook(() => useAnime())

    expect(result.current.anime).toEqual([])
  })

  it('should set anime when calling setAnime', () => {
    const { result } = renderHook(() => useAnime())

    act(() => {
      result.current.setAnime(mockListAnime)
    })

    expect(result.current.anime).toEqual(mockListAnime)
  })
})
