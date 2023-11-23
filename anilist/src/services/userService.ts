import axios from 'axios'

// constants
import { ERRORS_MESSAGE } from '@constants/errorsMsg'
import { getUserQuery } from '@constants/query'
import { baseURL } from '@constants/urls'

export const fetchApi = async (accessToken: string) => {
  try {
    const headers = {
      Authorization: 'Bearer ' + JSON.parse(accessToken),
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }

    const data = {
      query: getUserQuery,
    }

    const response = await axios.post(baseURL as string, data, { headers })

    return response.data.data.Viewer
  } catch (error) {
    return ERRORS_MESSAGE.ERROR_FETCHING
  }
}
