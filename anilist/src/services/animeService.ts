import axios from 'axios'

// constants
import { baseURL } from '@constants/urls'
import { query } from '@constants/query'
import { ERRORS_MESSAGE } from '@constants/errorsMsg'

// types
import { variables } from '@type/Anime.types'

export const fetchApi = async (query: string, variables: variables) => {
  try {
    const response = await axios.post(baseURL as string, {
      query: query,
      variables: variables,
    })

    return response.data.data.Page
  } catch (error) {
    console.error(ERRORS_MESSAGE.ERROR_FETCHING, error)
  }
}

export const getAnime = (variables: variables) => {
  return fetchApi(query, variables)
}
