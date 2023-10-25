import { Box } from '@mantine/core'

// components
import SmallCard from '@components/Card/SmallCard'
import LandingSection from '@components/Landing'

// hooks
import useAnimeList from '@hooks/useAnimeList'

const HomePage = () => {
  const { data: listAnime, isLoading } = useAnimeList()

  console.log('anime', listAnime)

  const renderContent = () => {
    return listAnime?.map((anime) => (
      <Box key={anime.id}>
        <SmallCard anime={anime} />
      </Box>
    ))
  }

  return (
    <Box>
      <LandingSection />
      {listAnime && !isLoading ? renderContent() : <Box>Loading</Box>}
    </Box>
  )
}

export default HomePage
