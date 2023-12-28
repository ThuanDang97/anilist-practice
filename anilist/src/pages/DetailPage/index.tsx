import {
  Box,
  Flex,
  Grid,
  Image,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core'
import { useParams } from 'react-router-dom'

// hooks
import useAnimeDetail from '@hooks/useAnime/useAnimeDetail'

// types
import { Media } from '@type/anime'
import { YOUTUBE_EMBED } from '@constants/endPoints'

const DetailPage = () => {
  const theme = useMantineTheme()
  const { id: idParams } = useParams() as { id: string }
  const { data } = useAnimeDetail(idParams)

  console.log('data', data)
  const {
    relations,
    characterPreview,
    staffPreview,
    trailer,
    recommendations,
  } = data as Media

  const { node, relationType } = relations.edges[0]

  return (
    <Flex gap="25px" direction="column">
      {/* Relations */}
      <Box>
        <Title variant="primary" size="sm">
          Relations
        </Title>
        <Flex
          gap="10px"
          bg={theme.colors.background[3]}
          miw="350px"
          w="fit-content"
          mt="10px"
        >
          <Image
            src={node.coverImage.large}
            width="85px"
            height="115px"
            alt="cover image of relations"
          />
          <Flex direction="column" justify="space-between" p="5px">
            <Box>
              <Text variant="secondary">{relationType}</Text>
              <Text variant="primary">{node.title.userPreferred}</Text>
            </Box>
            <Text variant="primary">{`${node.format} · ${node.status}`}</Text>
          </Flex>
        </Flex>
      </Box>

      {/* Characters */}
      <Box>
        <Title variant="primary" size="sm">
          Characters
        </Title>
        <Grid
          sx={{
            rowGap: '10px',
            columnGap: '20px',
            marginTop: '10px',
          }}
        >
          {characterPreview.edges.map((character) => {
            const { id, node, role, voiceActors } = character
            return (
              <Grid.Col span={5} bg={theme.colors.background[3]} key={id}>
                <Flex justify="space-between">
                  <Flex gap={10}>
                    <Image
                      src={node.image.large}
                      width="60px"
                      height="80px"
                      alt="avatar of character"
                    />
                    <Flex direction="column" justify="space-between">
                      <Text variant="primary">{node.name.userPreferred}</Text>
                      <Text variant="primary">{role}</Text>
                    </Flex>
                  </Flex>
                  <Flex gap={10}>
                    <Flex
                      direction="column"
                      justify="space-between"
                      align="flex-end"
                    >
                      <Text variant="primary" align="end">
                        {voiceActors[0].name.userPreferred}
                      </Text>
                      <Text variant="primary">{voiceActors[0].language}</Text>
                    </Flex>
                    <Image
                      src={voiceActors[0].image.large}
                      width="60px"
                      height="80px"
                      alt="avatar of character"
                    />
                  </Flex>
                </Flex>
              </Grid.Col>
            )
          })}
        </Grid>
      </Box>

      {/* Staff */}
      <Box>
        <Title variant="primary" size="sm">
          Staff
        </Title>
        <Grid
          sx={{
            rowGap: '10px',
            columnGap: '20px',
            marginTop: '10px',
          }}
        >
          {staffPreview.edges.map((staff) => {
            const { id, node, role } = staff
            return (
              <Grid.Col span={5} bg={theme.colors.background[3]} key={id}>
                <Box>
                  <Flex gap={10}>
                    <Image
                      src={node.image.large}
                      width="60px"
                      height="80px"
                      alt="avatar of character"
                    />
                    <Flex direction="column" justify="space-between">
                      <Text variant="primary">{node.name.userPreferred}</Text>
                      <Text variant="primary">{role}</Text>
                    </Flex>
                  </Flex>
                </Box>
              </Grid.Col>
            )
          })}
        </Grid>
      </Box>

      {/* Trailer */}
      <Box>
        <Title variant="primary" size="sm">
          Trailer
        </Title>
        <Box
          mt="10px"
          component="iframe"
          src={`${YOUTUBE_EMBED}/${trailer.id}`}
        ></Box>
      </Box>

      {/* Recommendations */}
      <Box>
        <Title variant="primary" size="sm">
          Recommendations
        </Title>
        <Grid mt="10px">
          {recommendations.nodes.map((item) => {
            const { id, user, mediaRecommendation } = item

            return (
              <Grid.Col key={id} span={2}>
                <Image
                  src={mediaRecommendation.coverImage.large}
                  width="130px"
                />
                <Text variant="primary">
                  {mediaRecommendation.title.userPreferred}
                </Text>
              </Grid.Col>
            )
          })}
        </Grid>
      </Box>
    </Flex>
  )
}

export default DetailPage
