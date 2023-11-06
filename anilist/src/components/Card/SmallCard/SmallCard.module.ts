import { createStyles } from '@mantine/core'

export const useStylesSmallCard = createStyles((theme) => ({
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
    fontSize: theme.fontSizes.xl,
  },
  date: {
    textTransform: 'capitalize',
  },
  studios: {
    marginTop: '10px',
    fontSize: theme.fontSizes.xs,
  },
  info: {
    display: 'flex',
    gap: '10px',
    fontSize: theme.fontSizes.xs,
  },
  genres: {
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',
    marginTop: '22px',
    gap: '10px',
  },
  coverImage: {
    borderRadius: '5px',
  },
}))
