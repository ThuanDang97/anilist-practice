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
    color: '#8ba0b2',
    position: 'absolute',
    marginTop: '20px',
    left: '22px',
  },
  button: {
    background: 'transparent',
    color: '#8BA0B2',
    fontSize: theme.fontSizes.xxs,
    ':hover': {
      background: 'transparent',
    },
  },
}))
