import { Box, Button, Text } from '@mantine/core'

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
      <Box mt={50}>
        <Button variant="primary">123</Button>
        <Button variant="secondary">456</Button>
        <Text>123123</Text>
      </Box>
    </Box>
  )
}

export default HomePage
