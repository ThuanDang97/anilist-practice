import { UseQueryResult, useQuery } from '@tanstack/react-query'
// services
import { getDetailAnime } from '@services/animeService'

// types
import { Total } from '@type/anime'

const useAnimeDetail = (id: string): UseQueryResult<Total> => {
  return useQuery({
    queryKey: ['anime', id],
    queryFn: () => getDetailAnime(id),
  })
}

export default useAnimeDetail
