import { Box, Flex, Image, Text, Title } from '@mantine/core'
import { Link } from 'react-router-dom'
import { useMediaQuery } from '@mantine/hooks'

// styles
import { useStylesLanding } from './Landing.module'

// icons
import { ChevronRightIcon } from '@assets/icons/ChevronRightIcon'

// constants
import { END_POINTS } from '@constants/endPoints'

// mocks
import { mockFeatureCards } from '@mocks/mockFeatureCards'

type FeatureCard = {
  icon: string
  title: string
  description: string
}

const LandingSection = () => {
  const { classes } = useStylesLanding()
  const isMobile = useMediaQuery(`(max-width: 1024px)`)

  const renderFeatureCard = (item: FeatureCard) => (
    <Flex direction="row" gap={40} maw={400} mah={300}>
      <Image src={item.icon} alt={item.title} maw={85} mah={85} />
      <Box>
        <Title order={3} className={classes.title}>
          {item.title}
        </Title>
        <Text className={classes.desc}>{item.description}</Text>
      </Box>
    </Flex>
  )

  return (
    <Box
      className={classes.landing}
      p={{
        base: '70px 30px',
        md: '60px 80px',
      }}
      sx={{
        borderRadius: isMobile ? 0 : 20,
      }}
    >
      <Title className={classes.heading} order={1}>
        The next-generation anime platform
      </Title>
      <Title order={2} className={classes.subheading}>
        Track, share, and discover your favorite anime and manga with AniList
      </Title>
      <Flex
        wrap="wrap"
        rowGap={60}
        columnGap={70}
        justify="center"
        className={classes.featureCards}
      >
        {mockFeatureCards.map((featureCard) => (
          <Box key={featureCard.title}>{renderFeatureCard(featureCard)}</Box>
        ))}
      </Flex>
      <Link
        to={END_POINTS.SIGNUP}
        className={classes.joinBtn}
        aria-label="Join AniList"
        style={{
          marginBottom: isMobile ? '-91px' : '-78px',
        }}
      >
        <Text size="lg" fw={600}>
          Join Now
        </Text>
        <Box className={classes.circle}>
          <Box
            sx={{
              '& svg': {
                width: '20px',
                height: '20px',
                overflow: 'visible',
                display: 'flex',
              },
            }}
          >
            <ChevronRightIcon />
          </Box>
        </Box>
      </Link>
    </Box>
  )
}

export default LandingSection
