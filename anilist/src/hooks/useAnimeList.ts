import { UseQueryResult, useQuery } from '@tanstack/react-query'
// services
import { getAnime } from '@services/animeService'

// types
import { variables } from '@type/Anime.types'
import { Total } from '@type/anime'

const useAnimeList = (variables: variables): UseQueryResult<Total> => {
  return useQuery({
    queryKey: ['anime', variables],
    queryFn: () => getAnime(variables),
  })
}

export default useAnimeList
