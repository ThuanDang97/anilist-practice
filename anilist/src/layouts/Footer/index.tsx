import { Box, List, Popover, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Link } from 'react-router-dom'

// styles
import { useStylesFooter } from './Footer.module'
import {
  mockAbout,
  mockConnect,
  mockSocial,
  mockSupport,
} from '@mocks/mockNavFooter'

type ListLink = {
  label: string
  link: string
}

const Footer = () => {
  const { classes } = useStylesFooter()
  const [opened, { close, open }] = useDisclosure(false)

  const renderList = (listLink: ListLink[]) => {
    return (
      <List className={classes.list}>
        {listLink.map((item) => (
          <List.Item key={item.label} className={classes.link}>
            <Link to={item.link} role="menuitem">
              {item.label}
            </Link>
          </List.Item>
        ))}
      </List>
    )
  }

  return (
    <Box component="footer" className={classes.footer} role="contentinfo">
      <Box className={classes.container}>
        <Box className={classes.themes}>
          <Text className={classes.themeText}>Site Theme</Text>
          <Popover
            width={100}
            position="top-start"
            withArrow
            shadow="md"
            opened={opened}
            aria-label="Select Site Theme"
          >
            <Popover.Target>
              <Text onMouseEnter={open} onMouseLeave={close}>
                Hover
              </Text>
            </Popover.Target>
            <Popover.Dropdown style={{ pointerEvents: 'none' }}>
              <Text size="sm">Light</Text>
            </Popover.Dropdown>
          </Popover>
        </Box>
        <Box
          className={classes.nav}
          component="nav"
          aria-label="Site Navigation"
        >
          {/* render navigation section */}
          {renderList(mockAbout)}
          {renderList(mockConnect)}
          {renderList(mockSocial)}
          {renderList(mockSupport)}
        </Box>
      </Box>
    </Box>
  )
}

export default Footer
