import { MantineTheme } from '@mantine/core'

const Badge = {
  styles: (theme: MantineTheme) => ({
    root: {
      width: 'fit-content',
      height: '18px',
      fontSize: theme.fontSizes.xxs,
      padding: '0 10px',
      fontWeight: 700,
    },
  }),
}

export default Badge
