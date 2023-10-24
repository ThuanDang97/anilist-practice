import axios from 'axios'

// constants
import { baseURL } from '@constants/urls'

export const fetchApi = async (query: string) => {
  console.log(query)

  try {
    const response = await axios.post(baseURL as string, {
      query: query,
    })

    return response.data.data.Page.media
  } catch (error) {
    console.error('Error fetching anime data:', error)
  }
}

export const getAnime = () => {
  const query = `
          query {
              Page (page: 1, perPage: 10) {
                  media (type: ANIME) {
                      id
                      title {
                          romaji
                          english
                          native
                      }
                      startDate {
                          year
                          month
                          day
                      }
                      endDate {
                          year
                          month
                          day
                      }
                      status
                      episodes
                      duration
                      chapters
                      volumes
                      isAdult
                      genres
                      averageScore
                      popularity
                      source
                      countryOfOrigin
                      isLicensed
                      season
                      seasonYear
                      coverImage {
                          extraLarge
                          large
                          color
                      }
                      bannerImage
                    }
              }
          }
        `

  return fetchApi(query)
}
