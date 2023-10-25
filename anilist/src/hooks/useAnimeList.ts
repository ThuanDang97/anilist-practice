import { UseQueryResult, useQuery } from '@tanstack/react-query'

// services
import { getAnime } from '@services/animeService'

// types
import { Anime } from '@type/Anime.types'

const useAnimeList = (): UseQueryResult<Anime[]> => {
  return useQuery({
    queryKey: ['anime'],
    queryFn: () => getAnime(),
  })
}

export default useAnimeList
