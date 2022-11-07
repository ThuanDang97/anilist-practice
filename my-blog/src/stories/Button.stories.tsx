import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import theme from '@self-types/Themes.types'
import Button, { IButtonProps } from '@components/Button'

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

export const Primary = Template.bind({})
const primaryProps: IButtonProps = {
  color: 'primary',
  variant: 'contained',
  children: 'test',
}
Primary.args = primaryProps
