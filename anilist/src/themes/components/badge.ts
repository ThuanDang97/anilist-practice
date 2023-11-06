import { MantineTheme } from '@mantine/core'

const Badge = {
  styles: (theme: MantineTheme) => ({
    root: {
      width: 'fit-content',
      height: '18px',
      fontSize: theme.fontSizes.xxs,
      padding: '0 10px',
      color: '#FFF5F8',
      fontWeight: 700,
    },
  }),
}

export default Badge
