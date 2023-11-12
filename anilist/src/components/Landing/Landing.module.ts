import { createStyles } from '@mantine/core'

export const useStylesLanding = createStyles(() => ({
  landing: {
    background: '#0a1625',
    margin: '0 auto',
    maxWidth: '1100px',
    width: '100%',
    color: '#f0f3f6',
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
    color: '#acd5f2',
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
    color: '#acd5f2',
    fontSize: '13px',
  },
  joinBtn: {
    alignItems: 'center',
    background: '#3577ff',
    borderRadius: '30px',
    boxShadow: '0 2px 40px rgba(0,0,0,.4)',
    display: 'flex',
    width: '200px',
    height: '49px',
    padding: '0 7px 0 20px',
    margin: '0 auto',
    justifyContent: 'space-between',
    transition: 'box-shadow .4s ease',
    ':hover': {
      boxShadow: `0 2px 43px #3577ff`,
    },
  },
  circle: {
    background: '#d9e6ff',
    color: '#3577ff',
    width: '37px',
    height: '37px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))
