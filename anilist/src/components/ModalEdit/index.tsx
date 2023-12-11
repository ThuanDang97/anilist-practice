import {
  ActionIcon,
  Box,
  Button,
  Checkbox,
  Flex,
  Grid,
  Image,
  Modal,
  NumberInput,
  Text,
  TextInput,
  Textarea,
  useMantineTheme,
} from '@mantine/core'

// assets
import FrownIcon from '@assets/icons/FrownIcon'
import MehIcon from '@assets/icons/MehIcon'
import SmileIcon from '@assets/icons/SmileIcon'

// components
import Select from '@components/Select'

// constants
import { ListStatusEdit } from '@constants/variables'

interface IModalEdit {
  isOpen: boolean
  onClose: () => void
  title: { userPreferred: string }
  coverImage: { large: string }
  bannerImage: string
}

const ModalEdit = ({
  isOpen,
  onClose,
  title,
  coverImage,
  bannerImage,
}: IModalEdit) => {
  const theme = useMantineTheme()

  const renderTitleModal = () => {
    return (
      <Box w="100%">
        <Flex direction="row" w="100%" align="center">
          <Image src={coverImage.large} w="100px" height="150px" mb="-30px" />
          <Text
            p="20px"
            color={theme.colors.light[0]}
            sx={{
              textWrap: 'nowrap',
            }}
          >
            {title.userPreferred}
          </Text>
        </Flex>
      </Box>
    )
  }

  return (
    <Modal
      data-testid="modal-edit"
      opened={isOpen}
      onClose={onClose}
      title={renderTitleModal()}
      centered
      size="1000px"
      h="100%"
      styles={{
        header: {
          backgroundImage: `linear-gradient(45deg, rgba(17,22,29,0.7) 100%, rgba(237,241,245,1) 100%), url(${bannerImage})`,
          backgroundSize: 'cover',
        },
        close: {
          position: 'absolute',
          right: 10,
          top: 10,
        },
      }}
    >
      <Flex
        p="70px"
        pt="70px"
        justify="flex-end"
        direction="column"
        bg={theme.colors.background[1]}
      >
        <form>
          <Flex>
            <Flex gap="30px" direction="column" maw="80%">
              <Grid>
                <Grid.Col span="auto">
                  <Select
                    title="Status"
                    listSelect={Object.values(ListStatusEdit)}
                    placeHolder={ListStatusEdit.PLAN_TO_WATCH}
                  />
                </Grid.Col>
                <Grid.Col span="auto">
                  <Text color={theme.colors.title[2]} fw={600}>
                    Score
                  </Text>
                  <Flex
                    w="100%"
                    justify="space-around"
                    align="center"
                    gap="50px"
                    p="11px"
                    mt="5px"
                    bg={theme.colors.background[0]}
                    sx={{
                      borderRadius: '5px',
                    }}
                  >
                    <ActionIcon
                      variant="transparent"
                      size="md"
                      aria-label="smile"
                    >
                      <SmileIcon />
                    </ActionIcon>
                    <ActionIcon
                      variant="transparent"
                      size="md"
                      aria-label="meh"
                    >
                      <MehIcon />
                    </ActionIcon>
                    <ActionIcon
                      variant="transparent"
                      size="md"
                      aria-label="frown"
                    >
                      <FrownIcon />
                    </ActionIcon>
                  </Flex>
                </Grid.Col>
                <Grid.Col span="auto">
                  <NumberInput label="Episode Progress" />
                </Grid.Col>
              </Grid>
              <Grid>
                <Grid.Col span="auto">
                  <TextInput
                    label="Start Date"
                    type="date"
                    size="lg"
                    width="100%"
                  />
                </Grid.Col>
                <Grid.Col span="auto">
                  <TextInput
                    label="Finish Date"
                    type="date"
                    size="lg"
                    width="100%"
                  />
                </Grid.Col>
                <Grid.Col span="auto">
                  <NumberInput label="Total Rewatches" size="lg" />
                </Grid.Col>
              </Grid>
              <Textarea label="Notes" />
            </Flex>
            <Flex
              direction="column"
              justify="space-between"
              align="flex-end"
              w="30%"
            >
              <Box>
                <TextInput
                  label="Custom Lists"
                  placeholder="No custom anime lists"
                  styles={{
                    input: {
                      borderRadius: 0,
                      background: 'transparent',
                      borderBottom: '1px solid',
                    },
                  }}
                />
                <Checkbox
                  label="Private"
                  mt="30px"
                  color="indigo"
                  styles={{
                    label: {
                      color: theme.colors.title[1],
                    },
                  }}
                />
              </Box>
              <Button
                variant="outline"
                sx={{
                  fontSize: theme.fontSizes.xxs,
                  fontWeight: 500,
                }}
                mt="200px"
              >
                Delete
              </Button>
            </Flex>
          </Flex>
        </form>
      </Flex>
    </Modal>
  )
}

export default ModalEdit
