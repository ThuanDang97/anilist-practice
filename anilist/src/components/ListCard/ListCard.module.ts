import { createStyles } from '@mantine/core'

export const useStylesListCards = createStyles(() => ({
  landingSection: {
    paddingBottom: '80px',
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  results: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
  ranks: {
    width: '50px',
    height: '50px',
    fontWeight: 900,
    fontSize: '30px',
    color: '#8ba0b2',
    marginLeft: '5px',
  },
}))
