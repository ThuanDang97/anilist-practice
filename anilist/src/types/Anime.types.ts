type TStudio = {
  nodes: {
    id: number
    name: string
  }[]
}

export interface IAnime {
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
  studios: TStudio
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
