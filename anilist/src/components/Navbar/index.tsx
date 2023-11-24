import {
  Box,
  Flex,
  Grid,
  HoverCard,
  Text,
  useMantineTheme,
} from '@mantine/core'
import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

// utils

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

interface IAbout {
  icon: ReactNode
  label: string
  link: string
}
interface INavbar {
  label: string
  link: string
  subMenu?: ISubMenu[]
  about?: IAbout[]
}

interface IListNavbar {
  listNavbar: INavbar[]
}

const Navbar = ({ listNavbar }: IListNavbar) => {
  const { classes } = useStylesNavbar()
  const theme = useMantineTheme()

  const renderSubMenu = (item: INavbar) => {
    const { label, link, subMenu, about } = item

    return (
      <HoverCard
        width={340}
        position="bottom-start"
        withArrow
        shadow="md"
        aria-label="Menu"
        offset={-10}
        arrowOffset={35}
        styles={{
          dropdown: {
            background: theme.colors.background[0],
            border: theme.colors.background[0],
            padding: 0,
          },
          arrow: {
            border: theme.colors.background[0],
          },
        }}
      >
        <HoverCard.Target>
          <Link to={link}>
            <Text
              p="18px 16px"
              sx={{
                color: theme.colors.title[2],
                ':hover': {
                  color: theme.colors.title[1],
                },
              }}
            >
              {label}
            </Text>
          </Link>
        </HoverCard.Target>
        <HoverCard.Dropdown data-testid="menu">
          {subMenu?.map((item) => (
            <Flex
              key={item.label}
              align="center"
              gap={16}
              className={classes.submenu}
            >
              <Link to={item.link}>
                <Box w="15px" h="15px">
                  {item.icon}
                </Box>
              </Link>
              <Box>
                <Link to={item.link}>
                  <Text
                    size="md"
                    sx={{
                      color: theme.colors.title[2],
                      ':hover': {
                        color: theme.colors.title[1],
                      },
                    }}
                  >
                    {item.label}
                  </Text>
                </Link>
                <Flex gap="8px">
                  {item.subMenu.map((itemSubMenu) => (
                    <Link key={itemSubMenu.label} to={itemSubMenu.link}>
                      <Text
                        size="xxs"
                        sx={{
                          color: theme.colors.subtitle[1],
                          ':hover': {
                            color: theme.colors.title[1],
                          },
                        }}
                      >
                        {itemSubMenu.label}
                      </Text>
                    </Link>
                  ))}
                </Flex>
              </Box>
            </Flex>
          ))}
          <Grid
            className={classes.submenu}
            sx={{
              background: theme.colors.background[1],
              margin: 0,
              rowGap: '10px',
            }}
          >
            {about?.map((aboutItem) => (
              <Grid.Col
                span={6}
                key={aboutItem.label}
                sx={{
                  margin: 0,
                  padding: 0,
                }}
              >
                <Link to={aboutItem.link}>
                  <Flex gap="8px" align="start">
                    <Box w="10px" h="10px" mt={-2}>
                      {aboutItem.icon}
                    </Box>
                    <Text component="p" size="xs">
                      {aboutItem.label}
                    </Text>
                  </Flex>
                </Link>
              </Grid.Col>
            ))}
          </Grid>
        </HoverCard.Dropdown>
      </HoverCard>
    )
  }

  return (
    <Flex role="navigation">
      {listNavbar.map((item) => {
        const { label, link, subMenu } = item
        return (
          <Flex key={label} align="center">
            {subMenu ? (
              renderSubMenu(item)
            ) : (
              <Link to={link}>
                <Text
                  p="18px 16px"
                  sx={{
                    color: theme.colors.title[2],
                    ':hover': {
                      color: theme.colors.title[1],
                    },
                  }}
                >
                  {label}
                </Text>
              </Link>
            )}
          </Flex>
        )
      })}
    </Flex>
  )
}

export default Navbar
