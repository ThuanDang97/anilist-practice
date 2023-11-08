import { createStyles } from '@mantine/core'

export const useStylesTilesCard = createStyles(() => ({
  productCard: {
    height: '80px',
    display: 'flex',
    width: '100%',
    background: '#FFF',
    padding: '10px',
    marginLeft: '80px',
  },
  title: {
    color: '#516170',
    fontWeight: 600,
  },
  row: {
    fontWeight: 600,
    color: '#647380',
  },
  subRow: {
    color: '#8BA0B2',
  },
  genres: {
    display: 'flex',
    gap: '5px',
    textTransform: 'lowercase',
  },
  content: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'minmax(auto,calc(100% - 440px)) 130px 130px 150px',
    gridGap: '10px',
    padding: '8px 8px 8px 16px',
  },
}))
