import '@testing-library/jest-dom'

// Icons
import FrownIcon from '@assets/icons/FrownIcon'
import MehIcon from '@assets/icons/MehIcon'
import SmileIcon from '@assets/icons/SmileIcon'

// utils
import { render } from '@utils/testUtils'
import { formatAiringDetails, getIconOfScore } from '@utils/utils'

jest.mock('@assets/icons/FrownIcon', () =>
  jest.fn(() => <div data-testid="FrownIcon" />),
)
jest.mock('@assets/icons/MehIcon', () =>
  jest.fn(() => <div data-testid="MehIcon" />),
)
jest.mock('@assets/icons/SmileIcon', () =>
  jest.fn(() => <div data-testid="SmileIcon" />),
)

describe('getIconOfScore', () => {
  it('returns SmileIcon for score > 75', () => {
    render(getIconOfScore(80))
    expect(SmileIcon).toHaveBeenCalled()
  })

  it('returns MehIcon for 60 < score <= 75', () => {
    render(getIconOfScore(65))
    expect(MehIcon).toHaveBeenCalled()
  })

  it('returns FrownIcon for score <= 60', () => {
    render(getIconOfScore(55))
    expect(FrownIcon).toHaveBeenCalled()
  })
})

describe('formatAiringDetails', () => {
  it('formats airing details correctly for more than one day', () => {
    expect(
      formatAiringDetails({ episode: 1, timeUntilAiring: 3 * 24 * 60 * 60 }),
    ).toBe('Ep 1 airing in 3 days')
  })

  it('formats airing details correctly for exactly one day', () => {
    expect(
      formatAiringDetails({ episode: 1, timeUntilAiring: 1 * 24 * 60 * 60 }),
    ).toBe('Ep 1 airing in 1 day')
  })

  it('formats airing details correctly for less than one day', () => {
    expect(formatAiringDetails({ episode: 1, timeUntilAiring: 5 * 60 })).toBe(
      'Ep 1 airing in 0 day',
    )
  })
})
