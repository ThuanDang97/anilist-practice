export type Genre = string

export type Tag = {
  name: string
  description: string
  category: string
  isAdult: boolean
}

export type Genres = {
  genres: Genre[]
  tags: Tag[]
}

export type ListGenres = {
  value: string
  label: string
}

export type ListGenresGroup = {
  value: string
  label: string
  group: string
}
