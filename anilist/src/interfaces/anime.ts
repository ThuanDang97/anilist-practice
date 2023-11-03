// types
import { Studio } from '@type/Anime.types'

export interface AnimeActions {
  anime: Anime[]
  setAnime: (data: Anime[]) => void
}

export interface Total {
  Page: PageInformation
  media: Anime[]
}

export interface Anime {
  id: number
  title: {
    userPreferred: string
  }
  coverImage: {
    large: string
    extraLarge: string
    color: string
  }
  startDate: {
    year: number
    month: number
    day: number
  }
  endDate: {
    year: number
    month: number
    day: number
  }
  bannerImage: string
  season: string
  seasonYear: number
  description: string
  type: string
  format: string
  status: string
  episodes: number
  duration: number
  chapters: string
  volumes: string
  genres: string[]
  isAdult: boolean
  averageScore: number
  popularity: number
  studios: Studio
}

export interface PageInformation {
  total: number
  currentPage: number
  lastPage: number
  hasNextPage: boolean
  perPage: number
}
