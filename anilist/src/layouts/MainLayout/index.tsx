import { Outlet } from 'react-router-dom'
import { Box, Container, useMantineColorScheme } from '@mantine/core'

// layouts
import Footer from '../Footer'
import Header from '../Header'

// styles
import { useStylesMainLayout } from './MainLayout.module'
import { getColorScheme } from '@utils/utils'
import { useMediaQuery } from '@mantine/hooks'

const MainLayout = () => {
  const { classes } = useStylesMainLayout()
  const { colorScheme } = useMantineColorScheme()
  const isMobile = useMediaQuery(`(max-width: 1024px)`)

  return (
    <>
      {!isMobile && <Header isAuthenticated={false} />}
      <Box
        bg={getColorScheme(colorScheme, '#0B1622', '#edf1f5')}
        className={classes.background}
      >
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
