import {
  Avatar,
  Box,
  Button,
  ChevronIcon,
  Flex,
  Grid,
  HoverCard,
  Image,
  Text,
  useMantineTheme,
} from '@mantine/core'
import { Link } from 'react-router-dom'

// styles
import { useStylesHeader } from './Header.module'

// components
import Navbar from '@components/Navbar'

// constants
import { END_POINTS } from '@constants/endPoints'

// mocks
import { mockAuthNavbar, mockNavbar } from '@mocks/mockNavbar'

// assets
import AppStoreIcon from '@assets/icons/AppStoreIcon'
import DiscordIcon from '@assets/icons/DiscordIcon'
import EmailIcon from '@assets/icons/EmailIcon'
import HeartIcon from '@assets/icons/HeartIcon'
import SettingIcon from '@assets/icons/SettingIcon'
import SignOutIcon from '@assets/icons/SignOutIcon'
import UserIcon from '@assets/icons/UserIcon'

const listPrimaryLinks = [
  {
    icon: <UserIcon />,
    label: 'Profile',
    href: '',
  },
  {
    icon: <EmailIcon />,
    label: 'Notifications',
    href: '',
  },
  {
    icon: <SettingIcon />,
    label: 'Settings',
    href: '',
  },
]

const listSecondaryLinks = [
  {
    icon: <HeartIcon />,
    label: 'Donate',
    href: '',
  },
  {
    icon: <AppStoreIcon />,
    label: 'Apps',
    href: '',
  },
  {
    icon: <DiscordIcon />,
    label: 'Discord',
    href: '',
  },
  {
    icon: <SignOutIcon />,
    label: 'Logout',
    href: '',
  },
]

const Header = () => {
  const { classes } = useStylesHeader()
  const theme = useMantineTheme()

  const isAuthenticated = false

  return (
    <Box className={classes.header} component="header">
      <Box className={classes.container}>
        <Link to={END_POINTS.HOMEPAGE}>
          <Image
            src="https://anilist.co/img/icons/icon.svg"
            alt="logo"
            width="50"
            height="50"
          />
        </Link>
        <Box className={classes.container}>
          <Navbar listNavbar={isAuthenticated ? mockAuthNavbar : mockNavbar} />
        </Box>
        {isAuthenticated ? (
          <HoverCard
            width="250px"
            position="bottom"
            withArrow
            shadow="md"
            aria-label="avatar"
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
              <Flex align="center" gap="5px">
                <Avatar
                  src="https://s4.anilist.co/file/anilistcdn/user/avatar/large/default.png"
                  alt="avatar"
                />
                <ChevronIcon />
              </Flex>
            </HoverCard.Target>
            <HoverCard.Dropdown>
              <>
                <Flex direction="column" p="21px 27px" gap="10px">
                  {listPrimaryLinks.map((item) => (
                    <Link key={item.label} to={item.href}>
                      <Flex gap="8px" align="start">
                        <Box w="12px" h="12px">
                          {item.icon}
                        </Box>
                        <Text
                          component="p"
                          size="sm"
                          sx={{
                            color: theme.colors.title[2],
                            ':hover': {
                              color: theme.colors.title[1],
                            },
                          }}
                        >
                          {item.label}
                        </Text>
                      </Flex>
                    </Link>
                  ))}
                </Flex>
                <Grid
                  sx={{
                    background: theme.colors.background[1],
                    margin: 0,
                    rowGap: '10px',
                    padding: '21px 27px',
                  }}
                >
                  {listSecondaryLinks.map((item) => (
                    <Grid.Col
                      span={6}
                      key={item.label}
                      sx={{
                        margin: 0,
                        padding: 0,
                      }}
                    >
                      <Link key={item.label} to={item.href}>
                        <Flex gap="5px" align="start">
                          <Box w="10px" h="10px" mt={-2}>
                            {item.icon}
                          </Box>
                          <Text
                            component="p"
                            size="xs"
                            sx={{
                              color: theme.colors.title[2],
                              ':hover': {
                                color: theme.colors.title[1],
                              },
                            }}
                          >
                            {item.label}
                          </Text>
                        </Flex>
                      </Link>
                    </Grid.Col>
                  ))}
                </Grid>
              </>
            </HoverCard.Dropdown>
          </HoverCard>
        ) : (
          <Box className={classes.link}>
            <Link
              to="https://anilist.co/api/v2/oauth/authorize?client_id={client_id}&response_type=token"
              className={classes.login}
            >
              <Text size="md">Login</Text>
            </Link>
            <Link to={END_POINTS.SIGNUP}>
              <Button size="md" variant="primary">
                Sign Up
              </Button>
            </Link>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default Header
