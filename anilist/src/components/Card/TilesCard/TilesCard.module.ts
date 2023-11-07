import { createStyles } from '@mantine/core'

export const useStylesTilesCard = createStyles((theme) => ({
  productCard: {
    height: '80px',
    display: 'flex',
    width: '100%',
    background: '#FFF',
    padding: '10px',
  },
  row: {},
  subRow: {},
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
