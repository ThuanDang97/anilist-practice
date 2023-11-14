import { SORT_BY } from '.'

enum Media {
  ANIME,
  MANGA,
}

enum Format {
  TV = 'TV',
  TV_SHORT = 'TV SHORT',
  MOVIE = 'MOVIE',
  SPECIAL = 'SPECIAL',
  OVA = 'OVA',
  ONA = 'ONA',
  MUSIC = 'MUSIC',
  MANGA = 'MANGA',
  NOVEL = 'NOVEL',
  ONE_SHOT = 'ONE SHOT',
}

enum Status {
  FINISHED = 'FINISHED',
  RELEASING = 'RELEASING',
  NOT_YET_RELEASED = 'NOT YET RELEASED',
  CANCELLED = 'CANCELLED',
  HIATUS = 'HIATUS',
}

enum Season {
  WINTER = 'WINTER',
  SPRING = 'SPRING',
  SUMMER = 'SUMMER',
  FALL = 'FALL',
}

const trending = {
  sort: [SORT_BY.TRENDING_DESC, SORT_BY.POPULARITY_DESC],
}

const popularSeason = {
  season: Season.FALL,
  seasonYear: 2023,
}

const upcoming = {
  season: Season.WINTER,
  seasonYear: 2024,
}

const popular = {
  season: Season.WINTER,
  seasonYear: 2004,
}

const top100 = {
  perPage: 10,
  sort: [SORT_BY.SCORE_DESC],
}

export {
  trending,
  popularSeason,
  upcoming,
  popular,
  top100,
  Media,
  Format,
  Status,
  Season,
}
