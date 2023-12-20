import { Box, Flex, Image, Text, Title } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { Link } from 'react-router-dom'

// styles
import { useStylesLanding } from './Landing.module'

// icons
import { ChevronRightIcon } from '@assets/icons/ChevronRightIcon'

// constants
import { AUTHENTICATION } from '@constants/endPoints'

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
    <Flex
      direction="row"
      maw={{
        base: '300px',
        md: '400px',
      }}
      mah="300px"
      gap="40px"
    >
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
        borderRadius: isMobile ? 0 : '20px',
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
        rowGap="60px"
        columnGap="70px"
        justify="center"
        className={classes.featureCards}
      >
        {mockFeatureCards.map((featureCard) => (
          <Box key={featureCard.title}>{renderFeatureCard(featureCard)}</Box>
        ))}
      </Flex>
      <Link
        to={AUTHENTICATION}
        className={classes.joinBtn}
        aria-label="Join AniList"
        style={{
          marginBottom: isMobile ? '-91px' : '-78px',
        }}
      >
        <Text size="lg" fw={600}>
          Join Now
        </Text>
        <Flex justify="center" align="center" className={classes.circle}>
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
        </Flex>
      </Link>
    </Box>
  )
}

export default LandingSection
