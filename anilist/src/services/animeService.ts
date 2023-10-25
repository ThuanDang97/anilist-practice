import axios from 'axios'

// constants
import { baseURL } from '@constants/urls'
import { query } from '@constants/query'
import { ERRORS_MESSAGE } from '@constants/errorsMsg'

export const fetchApi = async (query: string) => {
  try {
    const response = await axios.post(baseURL as string, {
      query: query,
    })

    return response.data.data.Page.media
  } catch (error) {
    console.error(ERRORS_MESSAGE.ERROR_FETCHING, error)
  }
}

export const getAnime = () => {
  return fetchApi(query)
}
