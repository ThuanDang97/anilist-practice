import { UseInfiniteQueryResult, useInfiniteQuery } from '@tanstack/react-query'

// services
import { fetchPaginatedAnime } from '@services/animeService'

// types
import { variables } from '@type/variable'
import { Total } from '@type/anime'

const useInfiniteAnimeList = (
  variables: variables,
): UseInfiniteQueryResult<Total> => {
  return useInfiniteQuery(
    ['infiniteListAnime', variables],
    ({ pageParam = 1 }) => fetchPaginatedAnime(variables, pageParam),
    {
      keepPreviousData: true,
      getNextPageParam: (lastPage, pages) => {
        const nextPage = pages.length + 1

        return lastPage.media.length > 0 ? nextPage : undefined
      },
    },
  )
}

export default useInfiniteAnimeList
