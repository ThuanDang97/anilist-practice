// icons
import FrownIcon from '@assets/icons/FrownIcon'
import MehIcon from '@assets/icons/MehIcon'
import SmileIcon from '@assets/icons/SmileIcon'

/**
 *
 * @param score number
 * @returns icon of Score
 */
export const getIconOfScore = (score: number) => {
  if (score > 75) {
    return <SmileIcon />
  } else if (score > 60) {
    return <MehIcon />
  } else {
    return <FrownIcon />
  }
}

/**
 *
 * @param param0 The episode number.
 * @param param1 The time until airing in seconds.
 * @returns The formatted string.
 */
export const formatAiringDetails = ({
  episode,
  timeUntilAiring,
}: {
  episode: number
  timeUntilAiring: number
}) => {
  const timeUntilAiringDays = Math.floor(timeUntilAiring / (24 * 60 * 60))
  const daysLabel = timeUntilAiringDays > 1 ? 'days' : 'day'

  return `Ep ${episode} airing in ${timeUntilAiringDays} ${daysLabel}`
}
