import { Genre, Tag } from '@type/genres'

// utils
import { TransformListGenres } from '@utils/transformListGenres'

describe('TransformListGenres function', () => {
  it('transforms genres and tags correctly', () => {
    const genres: Genre[] = ['Action', 'Adventure', 'Comedy']

    const tags: Tag[] = [
      {
        name: '4-koma',
        description:
          "A manga in the 'yonkoma' format, which consists of four equal-sized panels arranged in a vertical strip.",
        category: 'Technical',
        isAdult: false,
      },
      {
        name: 'Achromatic',
        description:
          'Contains animation that is primarily done in black and white.',
        category: 'Technical',
        isAdult: false,
      },
    ]

    const result = TransformListGenres(genres, tags)

    expect(result).toEqual([
      { value: 'action', label: 'Action', group: 'genres' },
      { value: 'adventure', label: 'Adventure', group: 'genres' },
      { value: 'comedy', label: 'Comedy', group: 'genres' },
      { value: '4-koma', label: '4-koma', group: 'tags' },
      { value: 'achromatic', label: 'Achromatic', group: 'tags' },
    ])
  })

  it('handles undefined genres and tags', () => {
    const result = TransformListGenres(undefined, undefined)

    expect(result).toEqual([])
  })
})
