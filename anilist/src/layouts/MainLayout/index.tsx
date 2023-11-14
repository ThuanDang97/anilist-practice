import { Box, Container, useMantineTheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { Outlet } from 'react-router-dom'

// layouts
import Footer from '../Footer'
import Header from '../Header'

const MainLayout = () => {
  const theme = useMantineTheme()
  const isMobile = useMediaQuery(`(max-width: 1024px)`)

  return (
    <>
      {!isMobile && <Header isAuthenticated={false} />}
      <Box bg={theme.colors.background[2]}>
        <Container
          size="xl"
          pt={{
            base: 0,
            md: 80,
          }}
          pl={{
            base: 0,
            md: 16,
          }}
          pr={{
            base: 0,
            md: 16,
          }}
        >
          <Outlet />
        </Container>
      </Box>
      <Footer />
    </>
  )
}

export default MainLayout
