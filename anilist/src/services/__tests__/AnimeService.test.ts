import axios from 'axios'

// constants
import { ERRORS_MESSAGE } from '@constants/errorsMsg'
import { query } from '@constants/query'

// mocks
import { mockListAnime } from '@mocks/mockAnime'

// services
import { fetchApi } from '@services/animeService'

// interfaces
import { waitFor } from '@testing-library/react'

jest.mock('axios')

describe('fetchApi', () => {
  it('fetches data successfully from API', async () => {
    const data = {
      data: {
        data: {
          Page: {
            anime: mockListAnime,
          },
        },
      },
    }

    // Mock the axios post method
    ;(axios.post as jest.Mock).mockResolvedValue(data)

    const response = await fetchApi(query, {})

    await waitFor(() => {
      // Check if the response matches the expected data
      expect(response.anime).toEqual(mockListAnime)
    })
  })

  it('fetches erroneously from API', async () => {
    const errorMessage = 'Error message'
    // Mock the axios post method to throw an error
    ;(axios.post as jest.Mock).mockRejectedValue(new Error(errorMessage))

    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {})

    try {
      await fetchApi(query, {})
    } catch (error) {
      // Check if the error message is logged correctly
      expect(consoleSpy).toHaveBeenCalledWith(
        ERRORS_MESSAGE.ERROR_FETCHING,
        new Error(errorMessage),
      )
    } finally {
      // Restore the console spy after the test
      consoleSpy.mockRestore()
    }
  })
})
