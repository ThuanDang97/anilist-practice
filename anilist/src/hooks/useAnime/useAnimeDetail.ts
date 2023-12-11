import { UseQueryResult, useQuery } from '@tanstack/react-query'
// services
import { getDetailAnime } from '@services/animeService'

// types
import { Media } from '@type/anime'

const useAnimeDetail = (id: string): UseQueryResult<Media> => {
  return useQuery({
    queryKey: ['anime', id],
    queryFn: () => getDetailAnime(id),
  })
}

export default useAnimeDetail
