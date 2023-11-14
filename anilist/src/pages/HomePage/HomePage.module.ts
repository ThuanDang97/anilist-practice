import { MantineTheme, createStyles } from '@mantine/core'

export const useStylesHomePage = createStyles((theme: MantineTheme) => ({
  landingSection: {
    paddingBottom: '80px',
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
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
  button: {
    background: 'transparent',
    color: theme.colors.light[1],
    fontSize: theme.fontSizes.xxs,
  },
}))
