import { Box, Button, Title } from '@mantine/core'

// components
import LandingSection from '@components/Landing'
import ListCardComponent from '@components/ListCard'
import SmallCardSkeleton from '@components/Skeleton/SmallCardSkeleton'
import TilesCardSkeleton from '@components/Skeleton/TilesCardSkeleton'

// hooks
import useAnimeList from '@hooks/useAnimeList'

// constants
import { TITLE_SECTIONS } from '@constants/defaultValue'
import { END_POINTS } from '@constants/endPoints'
import {
  popular,
  popularSeason,
  top100,
  trending,
  upcoming,
} from '@constants/variables'

// interfaces
import { ListAnime } from '@interfaces/anime'

// mocks
import { mockListRenderSkeleton } from '@mocks/mockAnime'

// styles
import { useStylesHomePage } from './HomePage.module'

type TRenderSectionListAnime = {
  title: string
  listAnime: ListAnime[]
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

  const { classes } = useStylesHomePage()

  const renderSectionListAnime = ({
    title,
    listAnime,
    href,
    typeCard = 'small',
    loading,
  }: TRenderSectionListAnime) => {
    if (loading) {
      return (
        <Box className={classes.landingSection}>
          <Box className={classes.title}>
            <Title order={3}>{title}</Title>
            <Button>View All</Button>
          </Box>
          <Box
            className={
              typeCard === 'small' ? classes.smallCard : classes.tilesCard
            }
          >
            {mockListRenderSkeleton.map((index) =>
              typeCard === 'small' ? (
                <SmallCardSkeleton key={index} />
              ) : (
                <TilesCardSkeleton key={index} />
              ),
            )}
          </Box>
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
      href: END_POINTS.TRENDING,
      loading: isLoadingTrending,
    },
    {
      title: TITLE_SECTIONS.POPULAR,
      listAnime: listPopularSeason?.media || [],
      href: END_POINTS.THIS_SEASON,
      loading: isLoadingPopularSeason,
    },
    {
      title: TITLE_SECTIONS.UPCOMING,
      listAnime: listUpComing?.media || [],
      href: END_POINTS.NEXT_SEASON,
      loading: isLoadingUpComing,
    },
    {
      title: TITLE_SECTIONS.ALL_TIME,
      listAnime: listPopular?.media || [],
      href: END_POINTS.POPULAR,
      loading: isLoadingPopular,
    },
    {
      title: TITLE_SECTIONS.TOP_100,
      listAnime: listTop100?.media || [],
      href: END_POINTS.TOP_100,
      typeCard: 'tiles',
      loading: isLoadingTop100,
    },
  ]

  return (
    <>
      <LandingSection />
      <Box
        p={{
          base: 10,
          md: 0,
        }}
      >
        {listSectionsAnime.map((anime) =>
          renderSectionListAnime({
            title: anime.title,
            listAnime: anime.listAnime,
            href: anime.href,
            typeCard: anime.typeCard,
            loading: anime.loading,
          }),
        )}
      </Box>
    </>
  )
}

export default HomePage
