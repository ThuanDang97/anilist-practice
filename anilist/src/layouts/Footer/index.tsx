import {
  Box,
  Button,
  ColorScheme,
  Flex,
  Group,
  HoverCard,
  List,
  Text,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core'
import { Link } from 'react-router-dom'

// mocks
import {
  mockAbout,
  mockConnect,
  mockSocial,
  mockSupport,
} from '@mocks/mockNavFooter'

// styles
import { useStylesFooter } from './Footer.module'

type ListLink = {
  label: string
  link: string
}

type listSiteTheme = {
  type: 'light' | 'dark' | 'auto'
  desc: string
}

const listSiteTheme: listSiteTheme[] = [
  {
    type: 'light',
    desc: 'Light',
  },
  {
    type: 'dark',
    desc: 'Dark',
  },
  {
    type: 'auto',
    desc: 'System Theme',
  },
]

const Footer = () => {
  const { classes } = useStylesFooter()

  const { toggleColorScheme } = useMantineColorScheme()
  const theme = useMantineTheme()

  const renderList = (listLink: ListLink[]) => {
    return (
      <List>
        {listLink.map((item) => {
          const { link, label } = item

          return (
            <List.Item key={label} className={classes.link}>
              <Link to={link} role="link" aria-label={label}>
                {label}
              </Link>
            </List.Item>
          )
        })}
      </List>
    )
  }

  return (
    <Box component="footer" className={classes.footer} role="contentinfo">
      <Flex
        align="flex-start"
        justify="space-between"
        className={classes.container}
        direction={{
          base: 'column',
          md: 'row',
        }}
      >
        <Box
          mb={{
            base: '30px',
            md: '0',
          }}
        >
          <Text className={classes.themeText}>Site Theme</Text>
          <Group>
            {listSiteTheme.map((themeItem) => (
              <HoverCard
                position="top-start"
                withArrow
                shadow="xs"
                aria-label="Change Theme"
                key={themeItem.type}
                variant="dark"
                closeDelay={100}
                styles={{
                  dropdown: {
                    width: 'fit-content',
                    padding: '3px',
                    textAlign: 'center',
                    background: '#303133',
                    color: '#fff',
                    borderColor: '#303133',
                  },
                  arrow: {
                    borderColor: '#303133',
                  },
                }}
              >
                <HoverCard.Target>
                  <Button
                    sx={{
                      background:
                        themeItem.type === 'dark'
                          ? theme.colors.dark[2]
                          : themeItem.type === 'light'
                          ? theme.colors.light[5]
                          : `linear-gradient(45deg,${theme.colors.dark[2]} 55%,${theme.colors.light[5]} 0)`,
                      color:
                        themeItem.type === 'dark'
                          ? theme.colors.light[5]
                          : themeItem.type === 'light'
                          ? theme.colors.dark[2]
                          : `linear-gradient(45deg,${theme.colors.dark[2]} 55%,${theme.colors.light[5]} 0)`,
                      ':hover': {
                        background:
                          themeItem.type === 'dark'
                            ? theme.colors.dark[2]
                            : themeItem.type === 'light'
                            ? theme.colors.light[5]
                            : `linear-gradient(45deg,${theme.colors.dark[2]} 55%,${theme.colors.light[5]} 0)`,
                        color:
                          themeItem.type === 'dark'
                            ? theme.colors.light[5]
                            : themeItem.type === 'light'
                            ? theme.colors.dark[2]
                            : `linear-gradient(45deg,${theme.colors.dark[2]} 55%,${theme.colors.light[5]} 0)`,
                      },
                    }}
                    className={classes.button}
                    role="button"
                    onClick={() =>
                      toggleColorScheme(themeItem.type as ColorScheme)
                    }
                  >
                    A
                  </Button>
                </HoverCard.Target>
                <HoverCard.Dropdown>
                  <Text size={'xs'}>{themeItem.desc}</Text>
                </HoverCard.Dropdown>
              </HoverCard>
            ))}
          </Group>
        </Box>
        <Flex
          aria-label="Site Navigation"
          direction={{
            base: 'column',
            sm: 'row',
          }}
          gap={{
            base: '30px',
            md: '100px',
          }}
        >
          {/* render navigation section */}
          {renderList(mockAbout)}
          {renderList(mockConnect)}
          {renderList(mockSocial)}
          {renderList(mockSupport)}
        </Flex>
      </Flex>
    </Box>
  )
}

export default Footer
