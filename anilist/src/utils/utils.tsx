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
