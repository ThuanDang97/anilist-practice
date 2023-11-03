import { Outlet } from 'react-router-dom'
import { Box, Container } from '@mantine/core'

// layouts
import Footer from '../Footer'
import Header from '../Header'

// styles
import { useStylesMainLayout } from './MainLayout.module'

const MainLayout = () => {
  const { classes } = useStylesMainLayout()
  return (
    <>
      <Header isAuthenticated={false} />
      <Box className={classes.background}>
        <Container size="xl" pt={80}>
          <Outlet />
        </Container>
      </Box>
      <Footer />
    </>
  )
}

export default MainLayout
