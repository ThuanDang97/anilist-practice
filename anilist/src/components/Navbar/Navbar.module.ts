import { createStyles } from '@mantine/core'

export const useStylesNavbar = createStyles(() => ({
  link: {
    padding: '18px 16px',
    '& :hover': {
      color: '#d3d5f3',
    },
  },
  submenu: {
    padding: '21px 27px',
  },
}))
