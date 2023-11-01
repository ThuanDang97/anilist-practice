import { Box } from '@mantine/core'

// components
import LandingSection from '@components/Landing'
import ListCardComponent from '@components/ListCard'

// hooks
import useAnimeList from '@hooks/useAnimeList'

// constants
import {
  popular,
  popularSeason,
  top100,
  trending,
  upcoming,
} from '@constants/variables'
import { TITLE_SECTIONS } from '@constants/defaultValue'
import { END_POINTS } from '@constants/endPoints'

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

  return (
    <Box>
      <LandingSection />

      {/* List Anime Trending sections */}
      <Box>
        <ListCardComponent
          title={TITLE_SECTIONS.TRENDING}
          listAnime={listTrending?.media || []}
          href={END_POINTS.TRENDING}
        />
      </Box>

      {/* List Anime Popular sections */}
      <Box>
        <ListCardComponent
          title={TITLE_SECTIONS.POPULAR}
          listAnime={listPopularSeason?.media || []}
          href={END_POINTS.TRENDING}
        />
      </Box>

      {/* List Anime UpComing sections */}
      <Box>
        <ListCardComponent
          title={TITLE_SECTIONS.UPCOMING}
          listAnime={listUpComing?.media || []}
          href={END_POINTS.TRENDING}
        />
      </Box>

      {/* List Anime All Time Popular sections */}
      <Box>
        <ListCardComponent
          title={TITLE_SECTIONS.ALL_TIME}
          listAnime={listPopular?.media || []}
          href={END_POINTS.TRENDING}
        />
      </Box>

      {/* List Anime Trending sections */}
      <Box>
        <ListCardComponent
          title={TITLE_SECTIONS.TOP_100}
          listAnime={listTop100?.media || []}
          href={END_POINTS.TRENDING}
          typeCard="tiles"
        />
      </Box>
    </Box>
  )
}

export default HomePage
