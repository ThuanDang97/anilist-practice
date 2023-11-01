// constants
import { SORT_BY } from '@constants/sort'
import { Format, Media, Season, Status } from '@constants/variables'

export type Studio = {
  edges: [
    {
      isMain: boolean
      node: {
        id: number
        name: string
      }
    },
  ]
}

export type MediaType = Media
export type MediaFormat = Format
export type MediaStatus = Status
export type MediaSeason = Season

export type variables = {
  page?: number
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
