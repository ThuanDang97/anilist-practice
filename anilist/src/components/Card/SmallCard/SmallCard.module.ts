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
    fontSize: theme.fontSizes.xl,
  },

  studios: {
    marginTop: '10px',
    fontSize: theme.fontSizes.xs,
  },
  info: {
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
  title: {
    transition: 'color .2s ease',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}))
