// types
import { Anime } from '@type/Anime.types'

export interface AnimeActions {
  anime: Anime[]
  setAnime: (data: Anime[]) => void
}
