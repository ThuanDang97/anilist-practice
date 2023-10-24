// types
import { IAnime } from '@type/Anime.types'

export interface IAnimeActions {
  anime: IAnime[]
  setAnime: (data: IAnime[]) => void
}
