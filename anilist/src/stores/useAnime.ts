import { create } from 'zustand'

// types
import { AnimeActions } from '@type/anime'

const useAnime = create<AnimeActions>((set) => ({
  anime: [],
  setAnime: (data) => {
    set({ anime: data })
  },
}))

export default useAnime
