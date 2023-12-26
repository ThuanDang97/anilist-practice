import axios from 'axios'

// constants
import { ERRORS_MESSAGE } from '@constants/errorsMsg'
import { query } from '@constants/query'
import { baseURL } from '@constants/urls'
import { Media } from '@constants/variables'

// types
import { variables } from '@type/variable'

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

export const getDetailAnime = async (id: string) => {
  try {
    const variables = {
      id: parseFloat(id),
      type: Media.ANIME,
      isAdult: false,
    }

    const response = await axios.post(baseURL as string, {
      query: query,
      variables: variables,
    })

    return response.data.data.Page.media[0]
  } catch (error) {
    return ERRORS_MESSAGE.ERROR_FETCHING
  }
}

export const fetchPaginatedAnime = async (
  variables: variables,
  pageParam: number,
) => {
  try {
    const paginateVariable: variables = {
      ...variables,
      page: pageParam,
      perPage: 10,
    }

    const response = await axios.post(baseURL as string, {
      query: query,
      variables: paginateVariable,
    })

    return response.data.data.Page
  } catch (error) {
    return ERRORS_MESSAGE.ERROR_FETCHING
  }
}
