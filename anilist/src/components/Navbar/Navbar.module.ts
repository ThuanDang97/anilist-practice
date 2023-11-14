import { MantineTheme, createStyles } from '@mantine/core'

export const useStylesNavbar = createStyles((theme: MantineTheme) => ({
  link: {
    padding: '18px 16px',
    '& :hover': {
      color: theme.colors.light[2],
    },
  },
  submenu: {
    padding: '21px 27px',
  },
}))
