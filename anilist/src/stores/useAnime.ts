import { create } from 'zustand'

// interfaces
import { AnimeActions } from '@interfaces/anime'

const useAnime = create<AnimeActions>((set) => ({
  anime: [],
  setAnime: (data) => {
    set({ anime: data })
  },
}))

export default useAnime
