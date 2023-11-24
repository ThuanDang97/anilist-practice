import axios from 'axios'

// constants
import { ERRORS_MESSAGE } from '@constants/errorsMsg'
import { genresQuery } from '@constants/query'
import { baseURL } from '@constants/urls'

export const fetchApi = async (query: string) => {
  try {
    const response = await axios.post(baseURL as string, {
      query: query,
    })

    return response.data.data
  } catch (error) {
    return ERRORS_MESSAGE.ERROR_FETCHING
  }
}

export const getGenres = () => {
  return fetchApi(genresQuery)
}
