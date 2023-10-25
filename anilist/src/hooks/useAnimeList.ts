import { UseQueryResult, useQuery } from '@tanstack/react-query'

// services
import { getAnime } from '@services/animeService'

// types
import { IAnime } from '@type/Anime.types'

const useAnimeList = (): UseQueryResult<IAnime[]> => {
  return useQuery({
    queryKey: ['anime'],
    queryFn: () => getAnime(),
  })
}

export default useAnimeList
