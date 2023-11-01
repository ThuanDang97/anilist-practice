import { createStyles } from '@mantine/core'

export const useStylesListCards = createStyles(() => ({
  landingSection: {
    marginBottom: '50px',
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  results: {
    display: 'flex',
  },
  smallCard: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  tilesCard: {
    display: 'flex',
    flexDirection: 'column',
  },
}))
