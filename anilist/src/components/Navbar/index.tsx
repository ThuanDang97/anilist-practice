import { Box, Popover, Text } from '@mantine/core'
import { Link } from 'react-router-dom'
import { ReactNode } from 'react'
import { useDisclosure } from '@mantine/hooks'

// styles
import { useStylesNavbar } from './Navbar.module'

interface ISubMenu {
  label: string
  link: string
  icon: ReactNode
  subMenu: {
    label: string
    link: string
  }[]
}

interface INavbar {
  label: string
  link: string
  subMenu?: ISubMenu[]
}

interface IListNavbar {
  listNavbar: INavbar[]
}

const Navbar = ({ listNavbar }: IListNavbar) => {
  const { classes } = useStylesNavbar()

  const [opened, { close, open }] = useDisclosure(false)

  const renderSubMenu = (item: INavbar) => {
    const { label, link, subMenu } = item

    return (
      <Popover
        width={200}
        position="bottom"
        withArrow
        shadow="md"
        opened={opened}
        aria-label="Menu"
      >
        <Popover.Target>
          <Link to={link} className={classes.link}>
            <Text size="md" onMouseEnter={open} onMouseLeave={close}>
              {label}
            </Text>
          </Link>
        </Popover.Target>
        <Popover.Dropdown style={{ pointerEvents: 'none' }}>
          {subMenu?.map((item) => (
            <Link to={item.link} key={item.label}>
              <Text size="md">{item.label}</Text>
            </Link>
          ))}
        </Popover.Dropdown>
      </Popover>
    )
  }

  return (
    <Box component="nav" className={classes.nav} role="navigation">
      {listNavbar.map((item) => {
        const { label, link, subMenu } = item
        return (
          <Box key={label}>
            {subMenu ? (
              renderSubMenu(item)
            ) : (
              <Link to={link} className={classes.link} key={item.label}>
                <Text size="md">{label}</Text>
              </Link>
            )}
          </Box>
        )
      })}
    </Box>
  )
}

export default Navbar
