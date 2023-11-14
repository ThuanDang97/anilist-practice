import { MantineTheme, createStyles } from '@mantine/core'

export const useStylesLanding = createStyles((theme: MantineTheme) => ({
  landing: {
    background: theme.colors.dark[0],
    margin: '0 auto',
    maxWidth: '1100px',
    width: '100%',
    color: theme.colors.light[0],
    marginBottom: '80px',
  },
  heading: {
    fontSize: '32px',
    textAlign: 'center',
    marginBottom: '20px',
    lineHeight: '37px',
  },
  subheading: {
    fontSize: '21px',
    maxWidth: '390px',
    textAlign: 'center',
    lineHeight: '142%',
    margin: '0 auto',
    color: theme.colors.blue[0],
    fontWeight: 500,
  },
  featureCards: {
    marginBottom: '90px',
    marginTop: '81px',
  },

  title: {
    fontSize: '18px',
    fontWeight: 600,
    marginBottom: '8px',
  },
  desc: {
    color: theme.colors.blue[0],
    fontSize: '13px',
  },
  joinBtn: {
    alignItems: 'center',
    background: theme.colors.blue[1],
    borderRadius: '30px',
    boxShadow: `0 2px 40px ${theme.colors.dark[1]}`,
    display: 'flex',
    width: '200px',
    height: '49px',
    padding: '0 7px 0 20px',
    margin: '0 auto',
    justifyContent: 'space-between',
    transition: 'box-shadow .4s ease',
    ':hover': {
      boxShadow: `0 2px 43px ${theme.colors.blue[1]}`,
    },
  },
  circle: {
    background: '#d9e6ff',
    color: theme.colors.blue[1],
    width: '37px',
    height: '37px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))
