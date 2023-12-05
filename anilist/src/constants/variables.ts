import { SORT_BY } from '.'

enum Media {
  ANIME = 'ANIME',
  MANGA = 'MANGA',
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

enum ListStatus {
  CURRENT = 'CURRENT',
  PLANNING = 'PLANNING',
  COMPLETED = 'COMPLETED',
  DROPPED = 'DROPPED',
  PAUSED = 'PAUSED',
  REPEATING = 'REPEATING',
}

enum ListStatusEdit {
  WATCHING = 'Watching',
  PLAN_TO_WATCH = 'Plan to watch',
  COMPLETED = 'Completed',
  REWATCHING = 'Rewatching',
  PAUSED = 'Paused',
  DROPPED = 'Dropped',
}

const trending = {
  page: 1,
  type: Media.ANIME,
  sort: [SORT_BY.TRENDING_DESC, SORT_BY.POPULARITY_DESC],
}

const popularSeason = {
  page: 1,
  type: Media.ANIME,
  season: Season.FALL,
  seasonYear: 2023,
}

const upcoming = {
  type: Media.ANIME,
  season: Season.WINTER,
  seasonYear: 2024,
}

const popular = {
  type: Media.ANIME,
  season: Season.WINTER,
  seasonYear: 2004,
}

const top100 = {
  perPage: 10,
  sort: [SORT_BY.SCORE_DESC],
  status: Status.FINISHED,
  type: Media.ANIME,
}

export {
  Format,
  ListStatus,
  ListStatusEdit,
  Media,
  Season,
  Status,
  popular,
  popularSeason,
  top100,
  trending,
  upcoming,
}
