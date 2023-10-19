import { createStyles } from '@mantine/core'

export const useStylesFooter = createStyles(() => ({
  footer: {
    background: '#11161d',
    color: '#a0b1c5',
    fontWeight: 600,
    marginTop: '20px',
    minHeight: '100px',
    padding: '50px 30px',
    textAlign: 'left',
  },
  container: {
    maxWidth: '1050px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'flex-start',
    height: '100%',
    justifyContent: 'space-between',
  },
  nav: {
    display: 'flex',
    gap: '50px',
  },
  list: {},
  link: {
    listStyleType: 'none',
    color: '#a0b1c5',
    fontWeight: 600,
    marginBottom: '5px',
    '& :hover': {
      color: '#3db4f2',
    },
  },
  themes: {},
  themeText: {
    color: '#3db4f2',
    fontWeight: 700,
    paddingBottom: '14px',
    fontSize: '20px',
  },
}))
