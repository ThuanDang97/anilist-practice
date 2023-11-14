// icons
import MehIcon from '@assets/icons/MehIcon'
import SmileIcon from '@assets/icons/SmileIcon'

/**
 *
 * @param score number
 * @returns icon of Score
 */
export const getIconOfScore = (score: number) => {
  return score > 75 ? <SmileIcon /> : <MehIcon />
}
