import { Outlet } from 'react-router-dom'
import { Box, Container, useMantineColorScheme } from '@mantine/core'

// layouts
import Footer from '../Footer'
import Header from '../Header'

// styles
import { useStylesMainLayout } from './MainLayout.module'
import { getColorScheme } from '@utils/utils'

const MainLayout = () => {
  const { classes } = useStylesMainLayout()
  const { colorScheme } = useMantineColorScheme()
  return (
    <>
      <Header isAuthenticated={false} />
      <Box
        bg={getColorScheme(colorScheme, '#0B1622', '#edf1f5')}
        className={classes.background}
      >
        <Container size="xl" pt={80}>
          <Outlet />
        </Container>
      </Box>
      <Footer />
    </>
  )
}

export default MainLayout
