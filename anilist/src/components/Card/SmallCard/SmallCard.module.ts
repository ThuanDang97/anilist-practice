import { createStyles } from '@mantine/core'

export const useStylesSmallCard = createStyles(() => ({
  productCard: {
    width: '185px',
    height: '265px',
  },
  wrapper: {
    width: '100%',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  date: {
    textTransform: 'capitalize',
  },
  studios: {
    marginTop: '10px',
  },
  info: {
    display: 'flex',
    gap: '10px',
  },
  genres: {
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',
    marginTop: '22px',
    gap: '5px',
  },
  badge: {
    color: 'white',
    textTransform: 'lowercase',
  },
}))
