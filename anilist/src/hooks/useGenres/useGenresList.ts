import { UseQueryResult, useQuery } from '@tanstack/react-query'

// services
import { getGenres } from '@services/genresService'

// types
import { Genres } from '@type/genres'

const useGenresList = (): UseQueryResult<Genres> => {
  return useQuery({
    queryKey: ['genres'],
    queryFn: () => getGenres(),
  })
}

export default useGenresList
