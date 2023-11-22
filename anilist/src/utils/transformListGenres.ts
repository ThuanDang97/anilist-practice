import { Genre, Tag } from '@type/genres'

type TransformedObject = { value: string; label: string; group: string }

export const TransformListGenres = (
  genres: Genre[] | undefined,
  tags: Tag[] | undefined,
): TransformedObject[] => {
  const transformedArray: TransformedObject[] = []

  // Transform genres
  genres?.forEach((genre) => {
    transformedArray.push({
      value: genre.toLowerCase(),
      label: genre,
      group: 'genres',
    })
  })

  // Transform tags
  tags?.forEach((tag) => {
    transformedArray.push({
      value: tag.name.toLowerCase(),
      label: tag.name,
      group: 'tags',
    })
  })

  return transformedArray
}
