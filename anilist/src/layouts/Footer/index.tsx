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

  const renderList = (listLink: ListLink[]) => {
    return (
      <List>
        {listLink.map((item) => (
          <List.Item key={item.label} className={classes.link}>
            <Link to={item.link} role="menuitem">
              {item.label}
            </Link>
          </List.Item>
        ))}
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
            {listSiteTheme.map((theme) => (
              <HoverCard
                position="top-start"
                withArrow
                shadow="xs"
                aria-label="Select Site Theme"
                key={theme.type}
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
                        theme.type === 'dark'
                          ? '#11161d'
                          : theme.type === 'light'
                          ? '#edf1f5'
                          : 'linear-gradient(45deg,#11161d 55%,#edf1f5 0)',
                      color:
                        theme.type === 'dark'
                          ? '#edf1f5'
                          : theme.type === 'light'
                          ? '#11161d'
                          : 'linear-gradient(45deg,#11161d 55%,#edf1f5 0)',
                      ':hover': {
                        background:
                          theme.type === 'dark'
                            ? '#11161d'
                            : theme.type === 'light'
                            ? '#edf1f5'
                            : 'linear-gradient(45deg,#11161d 55%,#edf1f5 0)',
                        color:
                          theme.type === 'dark'
                            ? '#edf1f5'
                            : theme.type === 'light'
                            ? '#11161d'
                            : 'linear-gradient(45deg,#11161d 55%,#edf1f5 0)',
                      },
                    }}
                    className={classes.button}
                    onClick={() => toggleColorScheme(theme.type as ColorScheme)}
                  >
                    A
                  </Button>
                </HoverCard.Target>
                <HoverCard.Dropdown>
                  <Text size={'xs'}>{theme.desc}</Text>
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
