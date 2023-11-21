import {
  Box,
  Button,
  ChevronIcon,
  Flex,
  Input,
  MultiSelect,
  Select,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

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

// types
import { ListAnime } from '@type/anime'

// mocks
import { mockListRenderSkeleton } from '@mocks/mockAnime'

// styles
import { useStylesHomePage } from './HomePage.module'
import SearchComponent from '@components/Search'
import useGenresList from '@hooks/useGenresList'
import { TransformListGenres } from '@utils/transformListGenres'

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

  const { data: listGenres } = useGenresList()

  const newDate = TransformListGenres(listGenres?.genres, listGenres?.tags)

  console.log('listGenres', newDate)

  const { classes } = useStylesHomePage()
  const theme = useMantineTheme()
  const isMobile = useMediaQuery(`(max-width: 1024px)`)

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
            {mockListRenderSkeleton.map((index) =>
              typeCard === 'small' ? (
                <SmallCardSkeleton key={index} />
              ) : (
                <TilesCardSkeleton key={index} />
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
      <Flex gap="15px">
        <SearchComponent />
        <Box>
          <Text color={theme.colors.title[2]} fw={600}>
            Genres
          </Text>
          <MultiSelect
            aria-label="My select"
            searchable
            clearable
            disableSelectedItemFiltering
            data={[]}
            size="xs"
            placeholder="any"
            maxDropdownHeight={280}
          />
        </Box>
        <Box>
          <Text color={theme.colors.title[2]} fw={600}>
            Genres
          </Text>
          <MultiSelect
            aria-label="My select"
            searchable
            clearable
            disableSelectedItemFiltering
            data={[]}
            size="xs"
            placeholder="any"
            maxDropdownHeight={280}
          />
        </Box>
        <Box>
          <Text color={theme.colors.title[2]} fw={600}>
            Genres
          </Text>
          <MultiSelect
            aria-label="My select"
            searchable
            clearable
            disableSelectedItemFiltering
            data={[]}
            size="xs"
            placeholder="any"
            maxDropdownHeight={280}
          />
        </Box>
        <Box>
          <Text color={theme.colors.title[2]} fw={600}>
            Genres
          </Text>
          <MultiSelect
            aria-label="My select"
            searchable
            clearable
            disableSelectedItemFiltering
            data={[]}
            size="xs"
            placeholder="any"
            maxDropdownHeight={280}
          />
        </Box>
        <Box>
          <Text color={theme.colors.title[2]} fw={600}>
            Genres
          </Text>
          <MultiSelect
            aria-label="My select"
            searchable
            clearable
            disableSelectedItemFiltering
            data={[]}
            size="xs"
            placeholder="any"
            maxDropdownHeight={280}
          />
        </Box>
      </Flex>
      <Box
        p={{
          base: 16,
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
