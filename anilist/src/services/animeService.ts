import axios from 'axios'

// constants
import { baseURL } from '@constants/urls'
import { query } from '@constants/query'
import { ERRORS_MESSAGE } from '@constants/errorsMsg'

// types
import { variables } from '@type/variable'
import { Media } from '@constants/variables'
import { ListAnime } from '@type/anime'

export const getAnime = async (variables: variables) => {
  try {
    const response = await axios.post(baseURL as string, {
      query: query,
      variables: variables,
    })

    return response.data.data.Page
  } catch (error) {
    return ERRORS_MESSAGE.ERROR_FETCHING
  }
}

export const getDetailAnime = async (
  id: string,
): Promise<ListAnime[] | string> => {
  try {
    const variables = {
      id: id,
      isAdult: false,
      type: Media.ANIME,
    }

    const response = await axios.post(baseURL as string, {
      query: query,
      variables: variables,
    })

    return response.data.data.Page.media
  } catch (error) {
    return ERRORS_MESSAGE.ERROR_FETCHING
  }
}
