import {
  ActionIcon,
  BackgroundImage,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Image,
  Menu,
  Text,
  ThemeIcon,
  Title,
  useMantineTheme,
} from '@mantine/core'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'
import { Suspense, lazy, useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'

// constants
import { END_POINTS } from '@constants/endPoints'

// hooks
import useAnimeDetail from '@hooks/useAnime/useAnimeDetail'

// types
import { Media } from '@type/anime'

// mocks
import { navDetail } from '@mocks/mockNavDetail'

// utils
import { convertToKebabCase } from '@utils/convertToKebabCase'

// components
import ModalEdit from '@components/ModalEdit'

// Layouts
import SideBar from '@components/SideBar'
import Header from '../Header'
const Footer = lazy(() => import('../Footer'))

// assets
import { ArrowDownIcon, HeartIcon } from '@assets/icons'
import MehIcon from '@assets/icons/MehIcon'

const menuItems = [
  { value: 'Watching', label: 'Set as Watching' },
  { value: 'Planning', label: 'Set as Planning' },
]

const DetailLayout = () => {
  const theme = useMantineTheme()
  const isMobile = useMediaQuery(`(max-width: 1024px)`)

  const { id: idParams } = useParams() as { id: string }
  const { data, isLoading } = useAnimeDetail(idParams)

  const [titleButton, setTitleButton] = useState<string>('Add to List')
  const [isOpenedModal, { open: onOpenModal, close: onCloseModal }] =
    useDisclosure(false)

  if (isLoading) return null

  const { id, title, coverImage, bannerImage, description } = data as Media

  const slug = convertToKebabCase(title.userPreferred)

  const handleChangePlanning = (value: string) => {
    if (!value) return

    setTitleButton(value)
  }

  return (
    <>
      {!isMobile && <Header />}
      <BackgroundImage src={bannerImage} w="100%" h="400px" />
      {/* Banner */}
      <Box bg={theme.colors.background[0]}>
        <Container size="xl">
          <Flex gap="35px">
            <Box>
              <Image
                src={coverImage.extraLarge}
                width="215px"
                sx={{
                  marginTop: '-55px',
                }}
              />
              <Flex mt="25px">
                <Flex>
                  <Button
                    variant="secondary"
                    onClick={onOpenModal}
                    sx={{
                      borderTopRightRadius: '0',
                      borderBottomRightRadius: '0',
                    }}
                    fw={500}
                  >
                    {titleButton}
                  </Button>
                  <Menu position="bottom-end" offset={15} withArrow>
                    <Menu.Target>
                      <ActionIcon
                        w="36px"
                        h="36px"
                        bg={theme.colors.blue[0]}
                        sx={{
                          ':hover': {
                            backgroundColor: theme.colors.blue[0],
                          },
                          borderTopLeftRadius: '0',
                          borderBottomLeftRadius: '0',
                        }}
                      >
                        <ArrowDownIcon />
                      </ActionIcon>
                    </Menu.Target>

                    <Menu.Dropdown>
                      {menuItems.map((item) => {
                        const { value, label } = item

                        return <Menu.Item key={value}>{label}</Menu.Item>
                      })}
                    </Menu.Dropdown>
                  </Menu>
                </Flex>
                <Button>
                  <ThemeIcon w="36px" h="36px" color="red">
                    <HeartIcon />
                  </ThemeIcon>
                </Button>
              </Flex>
            </Box>
            <Box w="100%" mt="30px" mb="20px">
              <Title color={theme.colors.title[1]}>{title.userPreferred}</Title>
              <Text
                color={theme.colors.title[1]}
                dangerouslySetInnerHTML={{ __html: description }}
              />
              <Container size="xl" mt="50px">
                <Flex justify="space-between">
                  {navDetail.map((item, index) => (
                    <Text
                      key={`${item.id}-${index}`}
                      component={Link}
                      to={`${END_POINTS.ANIME}/${id}/${slug}${item.link}`}
                      color={theme.colors.title[1]}
                      sx={{
                        ':hover': {
                          color: theme.colors.blue[2],
                        },
                      }}
                    >
                      {item.label}
                    </Text>
                  ))}
                </Flex>
              </Container>
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Sidebar */}
      <Box bg={theme.colors.background[2]}>
        <Container size="xl" py="20px">
          <Grid>
            <Grid.Col span={2}>
              <SideBar information={data as Media} />
            </Grid.Col>
            <Grid.Col span={9}>
              <Outlet />
            </Grid.Col>
          </Grid>
        </Container>
      </Box>
      <Suspense fallback="...loading">
        <Footer />
      </Suspense>
      <ModalEdit
        isOpen={isOpenedModal}
        onClose={onCloseModal}
        title={title}
        coverImage={coverImage}
        bannerImage={bannerImage}
      />
    </>
  )
}

export default DetailLayout
