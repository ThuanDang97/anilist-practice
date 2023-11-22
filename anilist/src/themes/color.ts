import { MantineThemeOverride } from '@mantine/core'

const dark: Partial<MantineThemeOverride['colors']> = {
  title: ['#748899', '#C9D7E3', '#ADC0D2'],
  background: ['#152232', '#0A1625', '#0B1622'],
  description: ['#FBFBFBFB'],
  subtitle: ['#8BA0B2', '#647380'],
  dark: ['#0A1625', 'RGBA(0,0,0,.4)', '#11161D'],
  light: [
    '#F0F3F6',
    '#8BA0B2',
    '#D3D5F3',
    '#A0B1C5',
    '#46546B',
    '#EDF1F5',
    '#BCBEDC',
    '#D9E6FF',
  ],
  blue: ['#ACD5F2', '#3577FF', '#3DB4F2'],
}

const light: Partial<MantineThemeOverride['colors']> = {
  title: ['#748899', '#516170', '#647380'],
  background: ['#FBFBFBFB', '#748899', '#EDF1F5'],
  description: ['#152232'],
  subtitle: ['#647380', '#8BA0B2'],
  dark: ['#0A1625', 'RGBA(0,0,0,.4)', '#11161D'],
  light: [
    '#F0F3F6',
    '#8BA0B2',
    '#D3D5F3',
    '#A0B1C5',
    '#46546B',
    '#EDF1F5',
    '#BCBEDC',
    '#D9E6FF',
  ],
  blue: ['#ACD5F2', '#3577FF'],
}

export { dark, light }
