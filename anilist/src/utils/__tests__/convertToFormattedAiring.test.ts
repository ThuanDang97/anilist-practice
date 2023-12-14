import convertToFormattedString from '@utils/convertToFormattedAiring'

describe('convertToFormattedString', () => {
  test('should convert NextAiringEpisode to formatted string', () => {
    const episodeInfo = {
      airingAt: 0,
      episode: 12,
      timeUntilAiring: 540191,
    }

    const result = convertToFormattedString(episodeInfo)

    expect(result).toBe('Ep 12: 6d 6h 3m')
  })

  test('should handle timeUntilAiring = 0', () => {
    const episodeInfo = {
      airingAt: 0,
      episode: 1,
      timeUntilAiring: 0,
    }

    const result = convertToFormattedString(episodeInfo)

    expect(result).toBe('Ep 1: 0d 0h 0m')
  })
})
