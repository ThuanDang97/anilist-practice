import { UseQueryResult, useQuery } from '@tanstack/react-query'
// services
import { getAnime } from '@services/animeService'

// types
import { variables } from '@type/Anime.types'

// interfaces
import { Anime, Total } from '@interfaces/anime'

const useAnimeList = (variables: variables): UseQueryResult<Total> => {
  return useQuery({
    queryKey: ['anime'],
    queryFn: () => getAnime(variables),
  })
}

export default useAnimeList
