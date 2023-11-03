import { createStyles } from '@mantine/core'

export const useStylesNavbar = createStyles(() => ({
  nav: {
    display: 'flex',
  },
  link: {
    padding: '18px 16px',
    '& :hover': {
      color: '#d3d5f3',
    },
  },
}))
