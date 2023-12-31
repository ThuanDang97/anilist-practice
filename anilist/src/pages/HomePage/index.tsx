import { Box, Button, Flex, Title, useMantineTheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { v4 as uuidv4 } from 'uuid'

// components
import LandingSection from '@components/Landing'
import ListCardComponent from '@components/ListCard'
import SmallCardSkeleton from '@components/Skeleton/SmallCardSkeleton'
import TilesCardSkeleton from '@components/Skeleton/TilesCardSkeleton'

// hooks
import useAnimeList from '@hooks/useAnime/useAnimeList'

// constants
import { TITLE_SECTIONS } from '@constants/defaultValue'
import { END_POINTS_SECTIONS } from '@constants/endPoints'
import {
  popular,
  popularSeason,
  top100,
  trending,
  upcoming,
} from '@constants/variables'

// types
import { Media } from '@type/anime'

// mocks
import { mockListRenderSkeleton } from '@mocks/mockAnime'

// styles
import { useStylesHomePage } from './HomePage.module'

// hooks
import useGenresList from '@hooks/useGenres/useGenresList'

// stores
import useAuth from '@stores/useAuth'

// utils
import ListFilter from '@components/ListFilter'

type TRenderSectionListAnime = {
  title: string
  listAnime: Media[]
  href: string
  typeCard?: 'small' | 'tiles'
  loading: boolean
}

const HomePage = () => {
  const { data: listTrending, isLoading: isLoadingTrending } =
    useAnimeList(trending)
  const { data: listPopularSeason, isLoading: isLoadingPopularSeason } =
    useAnimeList(popularSeason)
  const { data: listUpComing, isLoading: isLoadingUpComing } =
    useAnimeList(upcoming)
  const { data: listPopular, isLoading: isLoadingPopular } =
    useAnimeList(popular)
  const { data: listTop100, isLoading: isLoadingTop100 } = useAnimeList(top100)
  const { data: listGenres } = useGenresList()

  const { classes } = useStylesHomePage()
  const theme = useMantineTheme()
  const isMobile = useMediaQuery(`(max-width: 1024px)`)
  const userAuthentication = useAuth((state) => state.userAuthentication)

  const renderSectionListAnime = ({
    title,
    listAnime,
    href,
    typeCard = 'small',
    loading,
  }: TRenderSectionListAnime) => {
    const isCard = typeCard === 'small'

    if (loading) {
      return (
        <Box className={classes.landingSection}>
          <Box className={classes.title}>
            <Title
              order={3}
              size={16}
              sx={{
                color: theme.colors.title[2],
                ':hover': {
                  color: theme.colors.title[1],
                },
              }}
            >
              {title}
            </Title>
            <Button
              sx={{
                ':hover': {
                  color: theme.colors.title[1],
                },
              }}
              className={classes.button}
            >
              View All
            </Button>
          </Box>
          <Flex
            className={isCard ? classes.smallCard : classes.tilesCard}
            direction={{ base: 'row', lg: isCard ? 'row' : 'column' }}
            sx={{
              flexFlow: 'row wrap',
            }}
            gap={isCard || isMobile ? 10 : 25}
            justify={isCard || isMobile ? 'space-between' : ''}
          >
            {mockListRenderSkeleton.map(() =>
              typeCard === 'small' ? (
                <SmallCardSkeleton key={uuidv4()} />
              ) : (
                <TilesCardSkeleton key={uuidv4()} />
              ),
            )}
          </Flex>
        </Box>
      )
    }

    return (
      <ListCardComponent
        title={title}
        listAnime={listAnime}
        href={href}
        typeCard={typeCard}
      />
    )
  }

  const listSectionsAnime: TRenderSectionListAnime[] = [
    {
      title: TITLE_SECTIONS.TRENDING,
      listAnime: listTrending?.media || [],
      href: END_POINTS_SECTIONS.TRENDING,
      loading: isLoadingTrending,
    },
    {
      title: TITLE_SECTIONS.POPULAR,
      listAnime: listPopularSeason?.media || [],
      href: END_POINTS_SECTIONS.THIS_SEASON,
      loading: isLoadingPopularSeason,
    },
    {
      title: TITLE_SECTIONS.UPCOMING,
      listAnime: listUpComing?.media || [],
      href: END_POINTS_SECTIONS.NEXT_SEASON,
      loading: isLoadingUpComing,
    },
    {
      title: TITLE_SECTIONS.ALL_TIME,
      listAnime: listPopular?.media || [],
      href: END_POINTS_SECTIONS.POPULAR,
      loading: isLoadingPopular,
    },
    {
      title: TITLE_SECTIONS.TOP_100,
      listAnime: listTop100?.media || [],
      href: END_POINTS_SECTIONS.TOP_100,
      typeCard: 'tiles',
      loading: isLoadingTop100,
    },
  ]

  return (
    <>
      {!userAuthentication && <LandingSection />}
      {listGenres && <ListFilter listGenres={listGenres} />}
      <Box
        p={{
          base: 16,
          md: 0,
        }}
      >
        {listSectionsAnime.map((anime) => {
          return (
            <Box key={anime.title}>
              {renderSectionListAnime({
                title: anime.title,
                listAnime: anime.listAnime,
                href: anime.href,
                typeCard: anime.typeCard,
                loading: anime.loading,
              })}
            </Box>
          )
        })}
      </Box>
    </>
  )
}

export default HomePage
