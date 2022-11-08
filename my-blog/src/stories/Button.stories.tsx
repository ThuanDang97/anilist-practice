import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import theme from '@self-types/Themes.types'
import Button, { IButtonProps } from '@components/Button'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

export default {
  title: 'Example/Button',
  component: Button,
  decorators: [
    (Story) => {
      return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Story />
        </ThemeProvider>
      )
    },
  ],
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const PreviousButton = Template.bind({})
const previousButton: IButtonProps = {
  variant: 'contained',
  children: 'Back',
  endIcon: <ArrowBackIcon />,
  sx: {
    width: '150px',
    display: 'flex',
    justifyContent: 'space-between',
  },
}
PreviousButton.args = previousButton

export const NextButton = Template.bind({})
const nextButton: IButtonProps = {
  variant: 'contained',
  children: 'Next',
  startIcon: <ArrowForwardIcon />,
  sx: {
    width: '150px',
    display: 'flex',
    justifyContent: 'space-between',
  },
}
NextButton.args = nextButton
