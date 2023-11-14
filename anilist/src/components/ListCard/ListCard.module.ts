import { MantineTheme, createStyles } from '@mantine/core'

export const useStylesListCards = createStyles((theme: MantineTheme) => ({
  landingSection: {
    paddingBottom: '80px',
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  results: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  smallCard: {
    justifyContent: 'space-between',
  },
  tilesCard: {},
  ranks: {
    width: '50px',
    height: '50px',
    fontWeight: 900,
    fontSize: '24px',
    color: theme.colors.light[1],
    position: 'absolute',
    marginTop: '20px',
    left: '22px',
  },
  button: {
    background: 'transparent',
    color: theme.colors.light[1],
    fontSize: theme.fontSizes.xxs,
    ':hover': {
      background: 'transparent',
    },
  },
}))
