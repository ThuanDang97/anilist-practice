import { createStyles } from '@mantine/core'

export const useStylesHomePage = createStyles(() => ({
  landingSection: {
    paddingBottom: '80px',
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  smallCard: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  tilesCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
  },
}))
