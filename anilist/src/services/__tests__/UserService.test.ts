import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

// services
import { fetchApi } from '@services/userService'

// constants
import { ERRORS_MESSAGE } from '@constants/errorsMsg'

const mock = new MockAdapter(axios)

describe('fetchApi', () => {
  afterEach(() => {
    mock.reset()
  })

  it('should fetch user data successfully', async () => {
    const mockAccessToken = 'mockedAccessToken'
    const mockUserData = {
      id: 1,
      name: 'thuan',
      avatar: {
        medium: '',
      },
    }
    mock.onPost().reply(200, { data: { Viewer: mockUserData } })

    const result = await fetchApi(mockAccessToken)

    expect(result).toEqual(mockUserData)
  })

  it('should handle errors and return error message', async () => {
    const mockAccessToken = 'mockedAccessToken'
    const errorMessage = 'Error fetching data'
    mock.onPost().reply(500, { message: errorMessage })

    const result = await fetchApi(mockAccessToken)

    expect(result).toEqual(ERRORS_MESSAGE.ERROR_FETCHING)
  })

  it('should handle network errors and return error message', async () => {
    const mockAccessToken = 'mockedAccessToken'
    mock.onPost().networkError()

    const result = await fetchApi(mockAccessToken)

    expect(result).toEqual(ERRORS_MESSAGE.ERROR_FETCHING)
  })
})
