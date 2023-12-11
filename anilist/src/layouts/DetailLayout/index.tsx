import {
  BackgroundImage,
  Box,
  Button,
  Container,
  Flex,
  Image,
  Select,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core'
import { Link, Outlet, useParams } from 'react-router-dom'
import { Suspense, lazy, useState } from 'react'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'

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
import Header from '../Header'
const Footer = lazy(() => import('../Footer'))

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
      <Box bg={theme.colors.background[2]}>
        <BackgroundImage src={bannerImage} w="100%" h="400px" />
        <Container size="lg">
          <Flex>
            <Box>
              <Image src={coverImage.extraLarge} />
              <Flex>
                <Flex>
                  <Button onClick={onOpenModal}>{titleButton}</Button>
                  <Select
                    data={[
                      { value: 'Watching', label: 'Set as Watching' },
                      { value: 'Planning', label: 'Set as Planning' },
                    ]}
                    onChange={handleChangePlanning}
                  />
                </Flex>
                <Button>123</Button>
              </Flex>
            </Box>
            <Box>
              <Title color={theme.colors.title[1]}>{title.userPreferred}</Title>
              <Text
                color={theme.colors.title[1]}
                dangerouslySetInnerHTML={{ __html: description }}
              />
              <Container size="sm">
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

          <Box>
            <Outlet />
          </Box>
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