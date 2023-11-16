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
  ranksCircle: {
    color: theme.colors.light[0],
    fontSize: theme.fontSizes.md,
    fontWeight: 600,
    width: '30px',
    height: '30px',
    position: 'absolute',
    borderRadius: '50%',
    zIndex: 1,
  },
}))
