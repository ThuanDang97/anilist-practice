import { createStyles } from '@mantine/core'

export const useStylesHeader = createStyles(() => ({
  container: {
    maxWidth: '1050px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
  header: {
    backgroundColor: '#2b2d42',
    color: '#bcbedc',
    fontWeight: 600,
    height: '75px',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  login: {
    padding: '18px 16px',
    '& :hover': {
      color: '#d3d5f3',
    },
  },
}))
