import { SORT_BY } from '.'

const trending = {
  sort: [SORT_BY.TRENDING_DESC, SORT_BY.POPULARITY_DESC],
}

const popularSeason = {
  sort: SORT_BY.POPULARITY_DESC,
}

const upcoming = {
  sort: SORT_BY.POPULARITY_DESC,
}

const popular = {
  sort: [SORT_BY.POPULARITY_DESC, SORT_BY.TRENDING_DESC],
}

const top100 = {
  perPage: 10,
  sort: SORT_BY.POPULARITY_DESC,
}

enum Media {
  ANIME,
  MANGA,
}

enum Format {
  TV,
  TV_SHORT,
  MOVIE,
  SPECIAL,
  OVA,
  ONA,
  MUSIC,
  MANGA,
  NOVEL,
  ONE_SHOT,
}

enum Status {
  FINISHED,
  RELEASING,
  NOT_YET_RELEASED,
  CANCELLED,
  HIATUS,
}

enum Season {
  WINTER,
  SPRING,
  SUMMER,
  FALL,
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
