import {
  Box,
  Flex,
  Grid,
  HoverCard,
  Text,
  useMantineColorScheme,
} from '@mantine/core'
import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

// styles
import { useStylesNavbar } from './Navbar.module'
import { getColorScheme } from '@utils/utils'

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
  const { colorScheme } = useMantineColorScheme()
  const renderSubMenu = (item: INavbar) => {
    const { label, link, subMenu, about } = item

    return (
      <HoverCard
        width={270}
        position="bottom-start"
        withArrow
        shadow="md"
        aria-label="Menu"
        offset={-10}
        arrowOffset={35}
        closeDelay={99999999}
        styles={{
          dropdown: {
            background: getColorScheme(colorScheme, '#151F2E', '#FBFBFBFB'),
            border: getColorScheme(colorScheme, '#151F2E', '#FBFBFBFB'),
          },
          arrow: {
            border: getColorScheme(colorScheme, '#151F2E', '#FBFBFBFB'),
          },
        }}
      >
        <HoverCard.Target>
          <Link to={link} className={classes.link}>
            {label}
          </Link>
        </HoverCard.Target>
        <HoverCard.Dropdown data-testid="menu">
          {subMenu?.map((item) => (
            <Flex key={item.label} align="center" gap={16} mb={16}>
              <Link to={item.link}>
                <Box w={15} h={15}>
                  {item.icon}
                </Box>
              </Link>
              <Box>
                <Link to={item.link}>
                  <Text
                    size="md"
                    sx={{
                      color: getColorScheme(colorScheme, '#ADC0D2', '#647380'),
                      ':hover': {
                        color: getColorScheme(
                          colorScheme,
                          '#C9D7E3',
                          '#516170',
                        ),
                      },
                    }}
                  >
                    {item.label}
                  </Text>
                </Link>
                <Flex gap={8}>
                  {item.subMenu.map((itemSubMenu) => (
                    <Link key={itemSubMenu.label} to={itemSubMenu.link}>
                      <Text
                        size="xxs"
                        sx={{
                          color: getColorScheme(
                            colorScheme,
                            '#647380',
                            '#8BA0B2',
                          ),
                          ':hover': {
                            color: getColorScheme(
                              colorScheme,
                              '#C9D7E3',
                              '#516170',
                            ),
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
          <Flex wrap="wrap" bg="#0a1625">
            {about?.map((aboutItem) => (
              <Link key={aboutItem.label} to={aboutItem.link}>
                <Flex gap={8} align="start">
                  <Box w={10} h={10}>
                    {aboutItem.icon}
                  </Box>
                  <Text size="xs">{aboutItem.label}</Text>
                </Flex>
              </Link>
            ))}
          </Flex>
        </HoverCard.Dropdown>
      </HoverCard>
    )
  }

  return (
    <Flex role="navigation">
      {listNavbar.map((item) => {
        const { label, link, subMenu } = item
        return (
          <Flex key={label}>
            {subMenu ? (
              renderSubMenu(item)
            ) : (
              <Link to={link} className={classes.link}>
                {label}
              </Link>
            )}
          </Flex>
        )
      })}
    </Flex>
  )
}

export default Navbar
