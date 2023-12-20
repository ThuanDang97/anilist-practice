import { NextAiringEpisode } from '@type/anime'

const convertToFormattedString = (
  episodeInfo: NextAiringEpisode,
): string | null => {
  if (!episodeInfo) return null

  const { episode, timeUntilAiring } = episodeInfo

  const days = Math.floor(timeUntilAiring / 86400)
  const hours = Math.floor((timeUntilAiring % 86400) / 3600)
  const minutes = Math.floor((timeUntilAiring % 3600) / 60)

  return `Ep ${episode}: ${days}d ${hours}h ${minutes}m`
}

export default convertToFormattedString
