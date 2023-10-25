export const query = `
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
                      studios
                      format
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
                          medium
                          color
                      }
                      bannerImage
                      description
                    }
              }
          }
        `
