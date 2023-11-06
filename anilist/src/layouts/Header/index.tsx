import { Box, Button, Image, Text } from '@mantine/core'
import { Link } from 'react-router-dom'

// styles
import { useStylesHeader } from './Header.module'

// constants
import { END_POINTS } from '@constants/endPoints'
import Navbar from '@components/Navbar'
import { mockAuthNavbar, mockNavbar } from '@mocks/mockNavbar'

interface IHeader {
  isAuthenticated: boolean
}

const Header = ({ isAuthenticated }: IHeader) => {
  const { classes } = useStylesHeader()

  return (
    <Box className={classes.header} component="header">
      <Box className={classes.container}>
        <Link to={END_POINTS.HOMEPAGE}>
          <Image
            src="https://anilist.co/img/icons/icon.svg"
            alt="logo"
            width="50"
            height="50"
          />
        </Link>
        <Box className={classes.container}>
          <Navbar listNavbar={isAuthenticated ? mockAuthNavbar : mockNavbar} />
        </Box>
        <Box className={classes.link}>
          <Link
            to="https://anilist.co/api/v2/oauth/authorize?client_id={client_id}&response_type=token"
            className={classes.login}
          >
            <Text size="md">Login</Text>
          </Link>
          <Link to={END_POINTS.SIGNUP}>
            <Button size="md" variant="primary">
              Sign Up
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default Header
