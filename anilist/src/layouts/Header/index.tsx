import {
  Avatar,
  Box,
  Button,
  ChevronIcon,
  Flex,
  Grid,
  HoverCard,
  Image,
  Modal,
  Text,
  useMantineTheme,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// styles
import { useStylesHeader } from './Header.module'

// components
import Navbar from '@components/Navbar'

// constants
import { AUTHENTICATION, END_POINTS } from '@constants/endPoints'

// mocks
import { mockAuthNavbar, mockNavbar } from '@mocks/mockNavbar'

// assets
import {
  AppStoreIcon,
  DiscordIcon,
  EmailIcon,
  HeartIcon,
  SettingIcon,
  SignOutIcon,
  UserIcon,
} from '@assets/icons'

// hooks
import useAuth from '@stores/useAuth'

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
  const [isOpenModal, { close, open }] = useDisclosure(false)
  const [externalPopup, setExternalPopup] = useState<Window>()
  const [userAuthentication, login, logout] = useAuth((state) => [
    state.userAuthentication,
    state.login,
    state.logout,
  ])

  useEffect(() => {
    if (!externalPopup) return

    setInterval(async () => {
      if (!externalPopup) return

      const hash = externalPopup.location.hash as string

      if (!hash) return

      if (hash.includes('access_token')) {
        // Parse the hash to extract the access token
        const accessToken = new URLSearchParams(hash.substring(1)).get(
          'access_token',
        )

        if (accessToken) {
          await login(accessToken)
          setExternalPopup(undefined)
          externalPopup.close()
          window.location.reload()
        }
      }
    }, 500)

    return
  }, [externalPopup, login])

  const handleRequestLogin = () => {
    const width = 900
    const height = 600
    const title = `LOGIN ANILIST`
    const popup = window.open(
      AUTHENTICATION,
      title,
      `width=${width},height=${height}`,
    )

    if (popup) {
      setExternalPopup(popup)
    }
  }

  const handleLogout = () => {
    logout()
    close()
  }

  return (
    <>
      <Box className={classes.header} component="header" role="banner">
        <Box className={classes.container}>
          <Link to={END_POINTS.HOMEPAGE}>
            <Image
              src="https://anilist.co/img/icons/icon.svg"
              alt="logo"
              width="50px"
              height="50px"
            />
          </Link>
          <Box className={classes.container}>
            <Navbar
              listNavbar={userAuthentication ? mockAuthNavbar : mockNavbar}
            />
          </Box>
          {userAuthentication ? (
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
                <Flex
                  align="center"
                  gap="5px"
                  tabIndex={0}
                  role="button"
                  aria-label="User Avatar Options"
                >
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
                      background: theme.colors.background[2],
                      margin: 0,
                      rowGap: '10px',
                      padding: '21px 27px',
                    }}
                  >
                    {listSecondaryLinks.map((item) => {
                      const { label, href, icon } = item

                      return (
                        <Grid.Col
                          span={6}
                          key={label}
                          sx={{
                            margin: 0,
                            padding: 0,
                          }}
                        >
                          {label === 'Logout' ? (
                            <Button
                              onClick={open}
                              leftIcon={
                                <Box w="10px" h="10px" mt={-2}>
                                  {icon}
                                </Box>
                              }
                              sx={{
                                padding: 0,
                                margin: 0,
                                color: theme.colors.title[2],
                                ':hover': {
                                  color: theme.colors.title[1],
                                },
                                fontSize: theme.fontSizes.xs,
                                background: 'transparent',
                                height: 'fit-content',
                              }}
                            >
                              {label}
                            </Button>
                          ) : (
                            <Link to={href}>
                              <Flex gap="5px" align="start">
                                <Box w="10px" h="10px" mt={-2}>
                                  {icon}
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
                                  {label}
                                </Text>
                              </Flex>
                            </Link>
                          )}
                        </Grid.Col>
                      )
                    })}
                  </Grid>
                </>
              </HoverCard.Dropdown>
            </HoverCard>
          ) : (
            <Box className={classes.link}>
              <Button
                onClick={handleRequestLogin}
                size="md"
                variant="primary"
                role="button"
                aria-label="Login"
              >
                Login with AniList
              </Button>
            </Box>
          )}
        </Box>
      </Box>
      <Modal
        opened={isOpenModal}
        onClose={close}
        title="Confirm Logout"
        centered
        styles={{
          content: {
            backgroundColor: theme.colors.background[3],
            padding: '15px',
          },
          header: {
            backgroundColor: theme.colors.background[3],
            padding: 0,
            paddingBottom: '15px',
          },
          title: {
            color: theme.colors.title[2],
            fontSize: theme.fontSizes.xl,
          },
        }}
      >
        <Text color={theme.colors.title[2]} fs={theme.fontSizes.sm}>
          Are you sure you want to logout?
        </Text>
        <Flex justify="flex-end" align="center" gap="15px" mt="25px">
          <Button
            size="xs"
            onClick={close}
            sx={{
              fontSize: theme.fontSizes.xxs,
              background: theme.colors.dark[0],
              fontWeight: 500,
            }}
          >
            Cancel
          </Button>
          <Button
            size="xs"
            onClick={handleLogout}
            sx={{
              fontSize: theme.fontSizes.xxs,
              background: theme.colors.blue[2],
              fontWeight: 500,
            }}
          >
            Yes, Logout
          </Button>
        </Flex>
      </Modal>
    </>
  )
}

export default Header
