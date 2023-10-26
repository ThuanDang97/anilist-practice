// types
import { Studio } from '@type/Anime.types'

export interface AnimeActions {
  anime: Anime[]
  setAnime: (data: Anime[]) => void
}

export interface Total {
  Page: PageInformation
  mediaTrends: AnimeTrends[]
}

export interface Anime {
  id: number
  title: {
    romaji: string
    english: string
    native: string
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
  studios: Studio
  format: string
  status: string
  episodes: number
  duration: number
  chapters: string | null
  volumes: string | null
  isAdult: boolean
  genres: string[]
  averageScore: number
  popularity: number
  source: string
  countryOfOrigin: string
  isLicensed: boolean
  season: string
  seasonYear: number
  coverImage: {
    medium: string
    extraLarge: string
    color: string
  }
  bannerImage: string
  description: string
}

export interface AnimeTrends {
  mediaId: number
  date: number
  trending: number
  averageScore: number
  popularity: number
  episode: number
  releasing: boolean
  media: Anime[]
}

export interface PageInformation {
  total: number
  currentPage: number
  lastPage: number
  hasNextPage: boolean
  perPage: number
}
