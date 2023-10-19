import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import Header from '../Header'

const MainLayout = () => {
  return (
    <>
      <Header isAuthenticated={false} />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout
