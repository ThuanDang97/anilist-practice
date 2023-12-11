export const END_POINTS = {
  HOMEPAGE: '/',
  SEARCH_PAGE: '/search/anime',
  SEARCH_MANGA: '/search/manga',
  SOCIAL: '/social',
  FORUM: '/forum',
  LOGIN: '/login',
  SIGNUP: '/signup',
  PROFILE: '/user',
  ANIME_LIST: '/user/:user/animelist',
  MANGA_LIST: '/user/:user/mangalist',
  TRENDING: '/trending',
  THIS_SEASON: '/this-season',
  NEXT_SEASON: '/next-season',
  POPULAR: '/popular',
  TOP_100: '/top-100',
  STAFF: '/search/staff',
  CHARACTERS: '/search/characters',
  REVIEW: '/reviews',
  RECOMMENDATIONS: '/recommendations',
  ANIME: '/anime',
}

export const AUTHENTICATION = `https://anilist.co/api/v2/oauth/authorize?client_id=${process.env.CLIENT_ID}&response_type=token`
