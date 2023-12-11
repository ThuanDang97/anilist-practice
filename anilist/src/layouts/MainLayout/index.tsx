import { Box, Container, useMantineTheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { Suspense, lazy } from 'react'
import { Outlet } from 'react-router-dom'

// layouts
import Header from '../Header'
const Footer = lazy(() => import('../Footer'))

const MainLayout = () => {
  const theme = useMantineTheme()
  const isMobile = useMediaQuery(`(max-width: 1024px)`)

  return (
    <>
      {!isMobile && <Header />}
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
      <Suspense fallback="...loading">
        <Footer />
      </Suspense>
    </>
  )
}

export default MainLayout
