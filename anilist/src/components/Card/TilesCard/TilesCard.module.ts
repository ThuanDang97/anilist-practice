import { createStyles } from '@mantine/core'

export const useStylesTilesCard = createStyles(() => ({
  productCard: {
    height: '80px',
    width: '100%',
    padding: '10px',
    marginLeft: '80px',
  },
  content: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'minmax(auto,calc(100% - 440px)) 130px 130px 150px',
    gridGap: '10px',
    padding: '8px 8px 8px 16px',
  },
}))
