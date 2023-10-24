import { create } from 'zustand'

// interfaces
import { IAnimeActions } from '@interfaces/anime'

const useAnime = create<IAnimeActions>((set) => ({
  anime: [],
  setAnime: (data) => {
    set({ anime: data })
  },
}))

export default useAnime
