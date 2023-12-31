// constants
import { SORT_BY } from '@constants/sort'
import { Format, ListStatus, Media, Season, Status } from '@constants/variables'

export interface Edge {
  isMain: boolean
  node: {
    id: number
    name: string
  }
}

export type Studio = {
  edges: Edge[]
}

export type MediaListStatus = ListStatus
export type MediaType = Media
export type MediaFormat = Format
export type MediaStatus = Status
export type MediaSeason = Season

export type variables = {
  page?: number
  perPage?: number
  id?: number
  type?: MediaType
  isAdult?: boolean
  search?: string
  format?: MediaFormat[]
  status?: MediaStatus
  source?: MediaSource
  season?: MediaSeason
  seasonYear?: number
  year?: string
  onList?: boolean
  episodeLesser?: number
  episodeGreater?: number
  durationLesser?: number
  durationGreater?: number
  chapterLesser?: number
  chapterGreater?: number
  volumeLesser?: number
  volumeGreater?: number
  licensedBy?: number[]
  isLicensed?: boolean
  genres?: string[]
  excludedGenres?: string[]
  tags?: string[]
  excludedTags?: string[]
  minimumTagRank?: number
  sort?: SORT_BY[]
}
