export const query = `
  query($page: Int, $perPage: Int, $sort: String) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      mediaTrends(sort: $sort) {
        mediaId
        date
        trending
        averageScore
        popularity
        episode
        releasing
        media {
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
          studios {
            nodes {
              id
              name
            }
          }
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
        }
      }
    }
  }
`
