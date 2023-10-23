import { Box } from '@mantine/core'

// components
import SmallCard from '@components/Card/SmallCard'
import LandingSection from '@components/Landing'

// mocks
import { mockAnime } from '@mocks/mockAnime'

const HomePage = () => {
  return (
    <Box>
      <LandingSection />
      <SmallCard anime={mockAnime} />
    </Box>
  )
}

export default HomePage
