import { Box, Image, Text, Title } from '@mantine/core'
import { Link } from 'react-router-dom'

// styles
import { useStylesLanding } from './Landing.module'

// icons
import { ChevronRightIcon } from '@assets/icons/ChevronRightIcon'

// constants
import { END_POINTS } from '@constants/endPoints'
import { mockFeatureCards } from '@mocks/mockFeatureCards'

type FeatureCard = {
  icon: string
  title: string
  description: string
}

const LandingSection = () => {
  const { classes } = useStylesLanding()

  const renderFeatureCard = (item: FeatureCard) => (
    <Box className={classes.featureCard}>
      <Image src={item.icon} alt={item.title} maw={85} mah={85} />
      <Box>
        <Title order={3} className={classes.title}>
          {item.title}
        </Title>
        <Text className={classes.desc}>{item.description}</Text>
      </Box>
    </Box>
  )

  return (
    <Box className={classes.landing}>
      <Title className={classes.heading} order={1}>
        The next-generation anime platform
      </Title>
      <Title order={2} className={classes.subheading}>
        Track, share, and discover your favorite anime and manga with AniList
      </Title>
      <Box className={classes.featureCards}>
        {mockFeatureCards.map((featureCard) => (
          <Box key={featureCard.title}>{renderFeatureCard(featureCard)}</Box>
        ))}
      </Box>
      <Link
        to={END_POINTS.SIGNUP}
        className={classes.joinBtn}
        aria-label="Join AniList"
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
